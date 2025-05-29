import { Loader2 } from "lucide-react";
import React from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

function RazorPayCallbackPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const allParams = Object.fromEntries(searchParams.entries());
  console.log(allParams);

  useEffect(() => {
    const data = {};
    data.razorpayPaymentId = allParams.razorpay_payment_id;
    data.razorpayPaymentLinkId = allParams.razorpay_payment_link_id;
    data.razorpayPaymentLinkStatus = allParams.razorpay_payment_link_status;
    data.razorpaySignature = allParams.razorpay_signature;
    data.razorpayPaymentLinkRefereceId = allParams.razorpay_payment_link_reference_id
    console.log(data);

    try {
      axiosInstance
        .post("/payment/register-playlist-purchase", data)
        .then(() => {
          toast("Good Job!", {
            icon: "✅",
          });
          window.location.href = "/playlist"
        });
    } catch (error) {
      console.log(error)
      toast.error("payment failed");

    }
  }, []);

  return (
    <div className="flex justify-center items-center w-full min-h-screen text-white">
      <div className="flex text-xl font-semibold gap-4">
        Processing Payment <Loader2 size={32} className="animate-spin" />
      </div>
    </div>
  );
}

export default RazorPayCallbackPage;
