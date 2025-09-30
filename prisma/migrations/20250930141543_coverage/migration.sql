/*
  Warnings:

  - You are about to drop the column `professionalActivity` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the `Payment` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[cud]` on the table `Admission` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
ALTER TYPE "SchoolShift" ADD VALUE 'FULL_DAY';

-- AlterTable
ALTER TABLE "Admin" ADD COLUMN     "email" TEXT;

-- AlterTable
ALTER TABLE "Admission" ADD COLUMN     "schoolEndTime" TIMESTAMP(3),
ADD COLUMN     "schoolStartTime" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "clinicId" INTEGER;

-- AlterTable
ALTER TABLE "Patient" DROP COLUMN "professionalActivity",
ADD COLUMN     "email" TEXT;

-- AlterTable
ALTER TABLE "Professional" ADD COLUMN     "email" TEXT;

-- AlterTable
ALTER TABLE "Root" ADD COLUMN     "email" TEXT;

-- DropTable
DROP TABLE "Payment";

-- CreateTable
CREATE TABLE "Clinic" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Clinic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentEvent" (
    "id" SERIAL NOT NULL,
    "amount" INTEGER NOT NULL,
    "paymentType" "PaymentType" NOT NULL,
    "description" TEXT,
    "status" TEXT,
    "transactionNumber" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PaymentEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProfessionalClinics" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ProfessionalClinics_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_PatientClinics" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_PatientClinics_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_RootClinics" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_RootClinics_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_AdminClinics" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_AdminClinics_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ProfessionalClinics_B_index" ON "_ProfessionalClinics"("B");

-- CreateIndex
CREATE INDEX "_PatientClinics_B_index" ON "_PatientClinics"("B");

-- CreateIndex
CREATE INDEX "_RootClinics_B_index" ON "_RootClinics"("B");

-- CreateIndex
CREATE INDEX "_AdminClinics_B_index" ON "_AdminClinics"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Admission_cud_key" ON "Admission"("cud");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_clinicId_fkey" FOREIGN KEY ("clinicId") REFERENCES "Clinic"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProfessionalClinics" ADD CONSTRAINT "_ProfessionalClinics_A_fkey" FOREIGN KEY ("A") REFERENCES "Clinic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProfessionalClinics" ADD CONSTRAINT "_ProfessionalClinics_B_fkey" FOREIGN KEY ("B") REFERENCES "Professional"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PatientClinics" ADD CONSTRAINT "_PatientClinics_A_fkey" FOREIGN KEY ("A") REFERENCES "Clinic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PatientClinics" ADD CONSTRAINT "_PatientClinics_B_fkey" FOREIGN KEY ("B") REFERENCES "Patient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RootClinics" ADD CONSTRAINT "_RootClinics_A_fkey" FOREIGN KEY ("A") REFERENCES "Clinic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RootClinics" ADD CONSTRAINT "_RootClinics_B_fkey" FOREIGN KEY ("B") REFERENCES "Root"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdminClinics" ADD CONSTRAINT "_AdminClinics_A_fkey" FOREIGN KEY ("A") REFERENCES "Admin"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdminClinics" ADD CONSTRAINT "_AdminClinics_B_fkey" FOREIGN KEY ("B") REFERENCES "Clinic"("id") ON DELETE CASCADE ON UPDATE CASCADE;
