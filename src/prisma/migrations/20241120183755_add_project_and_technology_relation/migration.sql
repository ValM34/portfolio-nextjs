/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Technology` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `projectId` to the `Technology` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Technology` ADD COLUMN `projectId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Technology_name_key` ON `Technology`(`name`);

-- AddForeignKey
ALTER TABLE `Technology` ADD CONSTRAINT `Technology_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
