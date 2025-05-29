/*
  Warnings:

  - Added the required column `razorpayPaymentLinkRefereceId` to the `PlaylistPurchase` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PlaylistPurchase" ADD COLUMN     "razorpayPaymentLinkRefereceId" TEXT NOT NULL,
ALTER COLUMN "razorpayPaymentId" DROP NOT NULL,
ALTER COLUMN "razorpaySignature" DROP NOT NULL;
