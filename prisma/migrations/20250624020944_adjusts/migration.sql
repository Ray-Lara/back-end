/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `customers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cpf` to the `customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payment_type` to the `receipts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `service_type` to the `receipts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "customers" ADD COLUMN     "cpf" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "receipts" ADD COLUMN     "payment_type" TEXT NOT NULL,
ADD COLUMN     "service_type" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "customers_cpf_key" ON "customers"("cpf");
