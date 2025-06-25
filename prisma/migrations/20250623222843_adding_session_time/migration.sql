/*
  Warnings:

  - You are about to drop the column `attendance` on the `Event` table. All the data in the column will be lost.
  - The `eventType` column on the `Event` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[dni]` on the table `Patient` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cuil]` on the table `Patient` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[dni]` on the table `Professional` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cuil]` on the table `Professional` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `endEvent` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startEvent` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cuil` to the `Professional` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "EventStatus" AS ENUM ('AVAILABLE', 'SCHEDULED', 'CANCELLED', 'COMPLETED');

-- CreateEnum
CREATE TYPE "EventType" AS ENUM ('CONSULTATION', 'STUDY', 'OTHER');

-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_patientId_fkey";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "attendance",
ADD COLUMN     "endEvent" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startEvent" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "status" "EventStatus" NOT NULL DEFAULT 'AVAILABLE',
DROP COLUMN "eventType",
ADD COLUMN     "eventType" "EventType" NOT NULL DEFAULT 'CONSULTATION',
ALTER COLUMN "patientId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Professional" ADD COLUMN     "cuil" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Schedule" ADD COLUMN     "sessionTime" INTEGER NOT NULL DEFAULT 30;

-- CreateIndex
CREATE UNIQUE INDEX "Patient_dni_key" ON "Patient"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "Patient_cuil_key" ON "Patient"("cuil");

-- CreateIndex
CREATE UNIQUE INDEX "Professional_dni_key" ON "Professional"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "Professional_cuil_key" ON "Professional"("cuil");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE SET NULL ON UPDATE CASCADE;
