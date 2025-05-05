-- CreateEnum
CREATE TYPE "submissionStatus" AS ENUM ('ACCEPETED', 'WRONG_ANSWER');

-- CreateTable
CREATE TABLE "submission" (
    "id" TEXT NOT NULL,
    "problemId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "sourceCode" JSONB NOT NULL,
    "language" TEXT NOT NULL,
    "stdin" TEXT,
    "stdout" TEXT,
    "stderr" TEXT,
    "compileOutput" TEXT,
    "status" "submissionStatus" NOT NULL,
    "memory" TEXT,
    "time" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "submission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "testcase" (
    "id" TEXT NOT NULL,
    "submissionId" TEXT NOT NULL,
    "testCase" INTEGER NOT NULL,
    "passed" BOOLEAN NOT NULL,
    "stdout" TEXT,
    "expected" TEXT NOT NULL,
    "stderr" TEXT,
    "compileOutput" TEXT,
    "status" "submissionStatus" NOT NULL,
    "memory" TEXT,
    "time" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "testcase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "problemSolved" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "problemId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "problemSolved_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "testcase_submissionId_idx" ON "testcase"("submissionId");

-- AddForeignKey
ALTER TABLE "submission" ADD CONSTRAINT "submission_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "problem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "testcase" ADD CONSTRAINT "testcase_submissionId_fkey" FOREIGN KEY ("submissionId") REFERENCES "submission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "problemSolved" ADD CONSTRAINT "problemSolved_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "problemSolved" ADD CONSTRAINT "problemSolved_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "problem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
