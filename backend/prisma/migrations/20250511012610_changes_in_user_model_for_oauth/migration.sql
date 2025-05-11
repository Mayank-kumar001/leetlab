-- CreateEnum
CREATE TYPE "authSource" AS ENUM ('GOOGLE', 'LOCAL');

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "authProvider" "authSource" NOT NULL DEFAULT 'LOCAL',
ADD COLUMN     "isVerfied" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "password" DROP NOT NULL;
