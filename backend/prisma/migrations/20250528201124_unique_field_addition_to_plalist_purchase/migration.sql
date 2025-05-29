/*
  Warnings:

  - A unique constraint covering the columns `[razorpayPaymentLinkRefereceId]` on the table `PlaylistPurchase` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PlaylistPurchase_razorpayPaymentLinkRefereceId_key" ON "PlaylistPurchase"("razorpayPaymentLinkRefereceId");
