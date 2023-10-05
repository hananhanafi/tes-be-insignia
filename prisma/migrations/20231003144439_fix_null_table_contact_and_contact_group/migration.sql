/*
  Warnings:

  - Made the column `name` on table `Contact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phoneNumber` on table `Contact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `ContactGroup` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Contact" ALTER COLUMN "updatedAt" DROP NOT NULL,
ALTER COLUMN "workspaceId" DROP NOT NULL,
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "phoneNumber" SET NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "address" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ContactGroup" ALTER COLUMN "updatedAt" DROP NOT NULL,
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;
