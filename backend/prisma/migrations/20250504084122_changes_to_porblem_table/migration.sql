/*
  Warnings:

  - The `referenceSolution` column on the `problem` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "problem" DROP COLUMN "referenceSolution",
ADD COLUMN     "referenceSolution" JSONB;
