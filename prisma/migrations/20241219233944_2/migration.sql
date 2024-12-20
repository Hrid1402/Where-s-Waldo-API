/*
  Warnings:

  - You are about to drop the column `x` on the `Character` table. All the data in the column will be lost.
  - Added the required column `X` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Character" DROP COLUMN "x",
ADD COLUMN     "X" INTEGER NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;
