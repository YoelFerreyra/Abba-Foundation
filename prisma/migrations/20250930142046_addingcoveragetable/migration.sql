/*
  Warnings:

  - You are about to drop the column `service` on the `HealthInsuranceAuthorization` table. All the data in the column will be lost.
  - Added the required column `coverageServiceId` to the `HealthInsuranceAuthorization` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "HealthInsuranceAuthorization" DROP COLUMN "service",
ADD COLUMN     "coverageServiceId" INTEGER NOT NULL;

-- DropEnum
DROP TYPE "CoverageService";

-- CreateTable
CREATE TABLE "CoverageService" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "CoverageService_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CoverageService_name_key" ON "CoverageService"("name");

-- AddForeignKey
ALTER TABLE "HealthInsuranceAuthorization" ADD CONSTRAINT "HealthInsuranceAuthorization_coverageServiceId_fkey" FOREIGN KEY ("coverageServiceId") REFERENCES "CoverageService"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
