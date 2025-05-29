import express from "express";
import Razorpay from "razorpay";
import { apiResponse } from "../libs/apiResponse.js";
import { apiError } from "../libs/apiError.js";
import crypto, { randomUUID } from "crypto";
import { db } from "../libs/db.js";
import { connect } from "http2";
import { create } from "domain";
export const createPaymentLink = async (req, res) => {
  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_TEST_KEY_ID,
    key_secret: process.env.RAZORPAY_TEST_KEY_SECRET,
  });
  try {
    const { name, email, amount, playlistId, playlistName } = req.body;
    console.log("kese hai app log");
    const reference_id = randomUUID();
    const response = await razorpay.paymentLink.create({
      amount: amount * 100, // in paise
      currency: "INR",
      accept_partial: false,
      reference_id,
      description: `Payment for playlist ${playlistName}`,
      customer: {
        name: name,
        email: email,
      },
      notify: {
        email: true,
        sms: true,
      },
      callback_url: process.env.RAZORPAY_CALLBACK_URL,
      callback_method: "get",
    });


    const existing = await db.PlaylistPurchase.findUnique({
      where:{
        userId_playlistId: {
          userId: req.user.id,
          playlistId: playlistId,
        },
      }
    }) 

    if(existing && existing.razorpayPaymentLinkStatus === "paid"){
      throw new apiError(405, "Already purchased")
    }

    await db.PlaylistPurchase.upsert({
      where: {
        userId_playlistId: {
          userId: req.user.id,
          playlistId: playlistId,
        },
      },
      update: {
        user: {
          connect: {
            id: req.user.id,
          },
        },
        playlist: {
          connect: {
            id: playlistId,
          },
        },
        playlistName,
        amount,
        razorpayPaymentLinkId: response.id,
        razorpayPaymentLinkRefereceId: reference_id,
        razorpayPaymentLinkStatus: "created",
      },
      create: {
        user: {
          connect: {
            id: req.user.id,
          },
        },
        playlist: {
          connect: {
            id: playlistId,
          },
        },
        playlistName,
        amount,
        razorpayPaymentLinkId: response.id,
        razorpayPaymentLinkRefereceId: reference_id,
        razorpayPaymentLinkStatus: "created",
      },
    });

    res
      .status(200)
      .json(
        new apiResponse(
          200,
          { paymentLink: response.short_url },
          "Payment link generated successfully"
        )
      );
  } catch (error) {
    console.log(error);
    if (error instanceof apiError) {
      return res.status(error.statusCode).json({
        statusCode: error.statusCode,
        message: error.message,
        success: false,
      });
    }
    return res.status(500).json({
      statusCode: 500,
      message: "Something went wrong while creating payment link",
      success: false,
    });
  }
};

export const registerPlaylistPurchase = async (req, res) => {
  try {
    const {
      razorpayPaymentId,
      razorpayPaymentLinkId,
      razorpayPaymentLinkStatus,
      razorpaySignature,
      razorpayPaymentLinkRefereceId,
    } = req.body;

    const existing = await db.PlaylistPurchase.findUnique({
      where: {
        razorpayPaymentLinkRefereceId,
      },
    });

    if (!existing) {
      throw apiError(400, "transaction not found");
    }

    console.log("hello world");

    const purchaseDetail = await db.PlaylistPurchase.update({
      where: {
        userId_playlistId: {
          userId: req.user.id,
          playlistId: existing.playlistId,
        },
      },
      data: {
        razorpayPaymentId,
        razorpayPaymentLinkId,
        razorpayPaymentLinkStatus,
        razorpaySignature,
      },
    });
    res.status(200).json(new apiResponse(200, {}, "Purchase successfull"));
  } catch (error) {
    console.log(error);
    if (error instanceof apiError) {
      return res.status(error.statusCode).json({
        statusCode: error.statusCode,
        message: error.message,
        success: false,
      });
    }
    return res.status(500).json({
      statusCode: 500,
      message: "Something went wrong processing payment",
      success: false,
    });
  }
};
