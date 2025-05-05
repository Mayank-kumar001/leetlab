/*
  Warnings:

  - Added the required column `codesnippets` to the `problem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `testCases` to the `problem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "problem" ADD COLUMN     "codesnippets" JSONB NOT NULL,
ADD COLUMN     "referenceSolution" TEXT,
ADD COLUMN     "testCases" JSONB NOT NULL,
ALTER COLUMN "hints" DROP NOT NULL,
ALTER COLUMN "editorial" DROP NOT NULL;
