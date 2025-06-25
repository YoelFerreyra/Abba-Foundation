/*
  Warnings:

  - You are about to drop the column `admissionStatus` on the `Admission` table. All the data in the column will be lost.
  - You are about to drop the column `healthInsuranceProvider` on the `LegalGuardian` table. All the data in the column will be lost.
  - You are about to drop the column `healthInsuranceProvider` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `healthInsuranceProvider` on the `Professional` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[firebaseUid]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `admissionDate` to the `Admission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `admissionTypeId` to the `Admission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isSchoolEnrolled` to the `Admission` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CoverageService" AS ENUM ('PSYCHOLOGY', 'PSYCHOPEDAGOGY', 'SPEECH_THERAPY', 'SUPPORT_TEACHER_MODULE', 'OCCUPATIONAL_THERAPY', 'PSYCHOMOTOR_THERAPY', 'THERAPY_TRANSPORT', 'SCHOOL_TRANSPORT', 'INTENSIVE_INTEGRAL_MODULE', 'SIMPLE_INTEGRAL_MODULE', 'SCHOOL_INCLUSION_SUPPORT_MODULE');

-- CreateEnum
CREATE TYPE "SchoolShift" AS ENUM ('MORNING', 'AFTERNOON', 'EVENING');

-- CreateEnum
CREATE TYPE "LegalGuardianCondition" AS ENUM ('RELACION_DEPENDENCIA', 'MONOTRIBUTISTA', 'OTROS');

-- AlterTable
ALTER TABLE "Admission" DROP COLUMN "admissionStatus",
ADD COLUMN     "admissionDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "admissionTypeId" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "cud" TEXT,
ADD COLUMN     "cudExpirationDate" TIMESTAMP(3),
ADD COLUMN     "isSchoolEnrolled" BOOLEAN NOT NULL,
ADD COLUMN     "legalGuardianId" INTEGER,
ADD COLUMN     "operationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "schoolShift" "SchoolShift",
ADD COLUMN     "status" "AdmissionStatus";

-- AlterTable
ALTER TABLE "HealthInsuranceProvider" ADD COLUMN     "contractor" TEXT,
ADD COLUMN     "subcontractor" TEXT;

-- AlterTable
ALTER TABLE "LegalGuardian" DROP COLUMN "healthInsuranceProvider",
ADD COLUMN     "healthInsuranceProviderId" INTEGER;

-- AlterTable
ALTER TABLE "Patient" DROP COLUMN "healthInsuranceProvider",
ADD COLUMN     "healthInsuranceProviderId" INTEGER;

-- AlterTable
ALTER TABLE "Professional" DROP COLUMN "healthInsuranceProvider",
ADD COLUMN     "healthInsuranceProviderId" INTEGER;

-- CreateTable
CREATE TABLE "HealthInsuranceAuthorization" (
    "id" SERIAL NOT NULL,
    "healthInsuranceProviderId" INTEGER NOT NULL,
    "admissionId" INTEGER NOT NULL,
    "service" "CoverageService" NOT NULL,
    "periodFrom" TIMESTAMP(3) NOT NULL,
    "periodTo" TIMESTAMP(3) NOT NULL,
    "authorizedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HealthInsuranceAuthorization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdmissionType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "AdmissionType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_firebaseUid_key" ON "User"("firebaseUid");

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_healthInsuranceProviderId_fkey" FOREIGN KEY ("healthInsuranceProviderId") REFERENCES "HealthInsuranceProvider"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthInsuranceAuthorization" ADD CONSTRAINT "HealthInsuranceAuthorization_healthInsuranceProviderId_fkey" FOREIGN KEY ("healthInsuranceProviderId") REFERENCES "HealthInsuranceProvider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthInsuranceAuthorization" ADD CONSTRAINT "HealthInsuranceAuthorization_admissionId_fkey" FOREIGN KEY ("admissionId") REFERENCES "Admission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LegalGuardian" ADD CONSTRAINT "LegalGuardian_healthInsuranceProviderId_fkey" FOREIGN KEY ("healthInsuranceProviderId") REFERENCES "HealthInsuranceProvider"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Professional" ADD CONSTRAINT "Professional_healthInsuranceProviderId_fkey" FOREIGN KEY ("healthInsuranceProviderId") REFERENCES "HealthInsuranceProvider"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Admission" ADD CONSTRAINT "Admission_admissionTypeId_fkey" FOREIGN KEY ("admissionTypeId") REFERENCES "AdmissionType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Admission" ADD CONSTRAINT "Admission_legalGuardianId_fkey" FOREIGN KEY ("legalGuardianId") REFERENCES "LegalGuardian"("id") ON DELETE SET NULL ON UPDATE CASCADE;
