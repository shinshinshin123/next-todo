/*
  Warnings:

  - You are about to alter the column `title` on the `Todo` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(50)`.
  - You are about to alter the column `content` on the `Todo` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.

*/
-- AlterTable
ALTER TABLE "Todo" ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "title" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "content" SET DATA TYPE VARCHAR(100);
