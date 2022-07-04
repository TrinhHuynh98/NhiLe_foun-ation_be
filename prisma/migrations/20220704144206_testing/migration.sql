/*
  Warnings:

  - The primary key for the `products` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `products` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "products" DROP CONSTRAINT "products_pkey",
ALTER COLUMN "id" SET DATA TYPE SERIAL,
ADD CONSTRAINT "products_pkey" PRIMARY KEY ("id");
