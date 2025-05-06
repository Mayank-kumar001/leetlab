-- CreateTable
CREATE TABLE "playlist" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "playlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "problemInPlaylist" (
    "id" TEXT NOT NULL,
    "playListId" TEXT NOT NULL,
    "problemId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "problemInPlaylist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "playlist_name_userId_key" ON "playlist"("name", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "problemInPlaylist_playListId_problemId_key" ON "problemInPlaylist"("playListId", "problemId");

-- AddForeignKey
ALTER TABLE "playlist" ADD CONSTRAINT "playlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "problemInPlaylist" ADD CONSTRAINT "problemInPlaylist_playListId_fkey" FOREIGN KEY ("playListId") REFERENCES "playlist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "problemInPlaylist" ADD CONSTRAINT "problemInPlaylist_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "problem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
