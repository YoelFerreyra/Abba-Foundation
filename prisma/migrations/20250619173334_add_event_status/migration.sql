/*
  Warnings:

  - You are about to drop the column `attendance` on the `Event` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[dni]` on the table `Patient` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cuil]` on the table `Patient` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[dni]` on the table `Professional` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cuil]` on the table `Professional` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `endEvent` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startEvent` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cuil` to the `Professional` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "EventStatus" AS ENUM ('SCHEDULED', 'CANCELLED', 'COMPLETED');

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "attendance",
ADD COLUMN     "endEvent" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startEvent" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "status" "EventStatus" NOT NULL DEFAULT 'SCHEDULED';

-- AlterTable
ALTER TABLE "Professional" ADD COLUMN     "cuil" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Patient_dni_key" ON "Patient"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "Patient_cuil_key" ON "Patient"("cuil");

-- CreateIndex
CREATE UNIQUE INDEX "Professional_dni_key" ON "Professional"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "Professional_cuil_key" ON "Professional"("cuil");
