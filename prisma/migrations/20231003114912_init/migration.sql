/*
  Warnings:

  - Made the column `email` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "updatedAt" DROP NOT NULL,
ALTER COLUMN "lastActivityAt" DROP NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "emailVerified" DROP NOT NULL,
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "password" SET NOT NULL;
