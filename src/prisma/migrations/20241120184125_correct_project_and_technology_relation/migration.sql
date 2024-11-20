/*
  Warnings:

  - You are about to drop the column `projectId` on the `Technology` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Technology` DROP FOREIGN KEY `Technology_projectId_fkey`;

-- AlterTable
ALTER TABLE `Technology` DROP COLUMN `projectId`;

-- CreateTable
CREATE TABLE `_ProjectToTechnology` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ProjectToTechnology_AB_unique`(`A`, `B`),
    INDEX `_ProjectToTechnology_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_ProjectToTechnology` ADD CONSTRAINT `_ProjectToTechnology_A_fkey` FOREIGN KEY (`A`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProjectToTechnology` ADD CONSTRAINT `_ProjectToTechnology_B_fkey` FOREIGN KEY (`B`) REFERENCES `Technology`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
