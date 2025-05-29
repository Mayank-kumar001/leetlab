/*
  Warnings:

  - Added the required column `razorpayPaymentId` to the `PlaylistPurchase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `razorpayPaymentLinkId` to the `PlaylistPurchase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `razorpayPaymentLinkStatus` to the `PlaylistPurchase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `razorpaySignature` to the `PlaylistPurchase` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PlaylistPurchase" ADD COLUMN     "razorpayPaymentId" TEXT NOT NULL,
ADD COLUMN     "razorpayPaymentLinkId" TEXT NOT NULL,
ADD COLUMN     "razorpayPaymentLinkStatus" TEXT NOT NULL,
ADD COLUMN     "razorpaySignature" TEXT NOT NULL;
