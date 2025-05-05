/*
  Warnings:

  - The values [ACCEPETED] on the enum `submissionStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "submissionStatus_new" AS ENUM ('ACCEPTED', 'WRONG_ANSWER');
ALTER TABLE "submission" ALTER COLUMN "status" TYPE "submissionStatus_new" USING ("status"::text::"submissionStatus_new");
ALTER TABLE "testcase" ALTER COLUMN "status" TYPE "submissionStatus_new" USING ("status"::text::"submissionStatus_new");
ALTER TYPE "submissionStatus" RENAME TO "submissionStatus_old";
ALTER TYPE "submissionStatus_new" RENAME TO "submissionStatus";
DROP TYPE "submissionStatus_old";
COMMIT;
