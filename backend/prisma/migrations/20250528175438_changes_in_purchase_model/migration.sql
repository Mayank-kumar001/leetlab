/*
  Warnings:

  - Added the required column `playlistName` to the `PlaylistPurchase` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PlaylistPurchase" ADD COLUMN     "playlistName" TEXT NOT NULL;
