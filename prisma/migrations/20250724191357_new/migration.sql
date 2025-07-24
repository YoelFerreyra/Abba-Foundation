/*
  Warnings:

  - The values [ACCOUNTANT] on the enum `UserRoles` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `profecionalType` on the `Professional` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `HealthInsuranceProvider` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[licenseNumber]` on the table `Professional` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `amount` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `licenseNumber` to the `Professional` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "UserRoles_new" AS ENUM ('ROOT', 'ADMIN', 'CLIENT', 'PROFESSIONAL');
ALTER TABLE "User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "role" TYPE "UserRoles_new" USING ("role"::text::"UserRoles_new");
ALTER TYPE "UserRoles" RENAME TO "UserRoles_old";
ALTER TYPE "UserRoles_new" RENAME TO "UserRoles";
DROP TYPE "UserRoles_old";
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'CLIENT';
COMMIT;

-- AlterTable
ALTER TABLE "HealthInsuranceProvider" ADD COLUMN     "email2" TEXT,
ADD COLUMN     "email3" TEXT,
ADD COLUMN     "nickName" TEXT,
ADD COLUMN     "webside" TEXT,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "contact" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "amount" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Professional" DROP COLUMN "profecionalType",
ADD COLUMN     "licenseNumber" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ProfessionalType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "ProfessionalType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConsultationPrice" (
    "id" SERIAL NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'ARS',
    "sessionType" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "professionalId" INTEGER NOT NULL,

    CONSTRAINT "ConsultationPrice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProfessionalToType" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ProfessionalToType_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ProfessionalToType_B_index" ON "_ProfessionalToType"("B");

-- CreateIndex
CREATE UNIQUE INDEX "HealthInsuranceProvider_name_key" ON "HealthInsuranceProvider"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Professional_licenseNumber_key" ON "Professional"("licenseNumber");

-- AddForeignKey
ALTER TABLE "ConsultationPrice" ADD CONSTRAINT "ConsultationPrice_professionalId_fkey" FOREIGN KEY ("professionalId") REFERENCES "Professional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProfessionalToType" ADD CONSTRAINT "_ProfessionalToType_A_fkey" FOREIGN KEY ("A") REFERENCES "Professional"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProfessionalToType" ADD CONSTRAINT "_ProfessionalToType_B_fkey" FOREIGN KEY ("B") REFERENCES "ProfessionalType"("id") ON DELETE CASCADE ON UPDATE CASCADE;
