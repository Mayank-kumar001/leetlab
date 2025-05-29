-- AlterTable
ALTER TABLE "playlist" ADD COLUMN     "basePrice" DOUBLE PRECISION DEFAULT 0,
ADD COLUMN     "isPaid" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "purchasedPlaylist" TEXT[];

-- CreateTable
CREATE TABLE "PlaylistPurchase" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "playlistId" TEXT NOT NULL,
    "purchasedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "PlaylistPurchase_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PlaylistPurchase_userId_playlistId_key" ON "PlaylistPurchase"("userId", "playlistId");

-- AddForeignKey
ALTER TABLE "PlaylistPurchase" ADD CONSTRAINT "PlaylistPurchase_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlaylistPurchase" ADD CONSTRAINT "PlaylistPurchase_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "playlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
