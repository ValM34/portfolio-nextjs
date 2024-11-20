/*
  Warnings:

  - You are about to drop the `_ProjectToTechnology` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_ProjectToTechnology` DROP FOREIGN KEY `_ProjectToTechnology_A_fkey`;

-- DropForeignKey
ALTER TABLE `_ProjectToTechnology` DROP FOREIGN KEY `_ProjectToTechnology_B_fkey`;

-- DropTable
DROP TABLE `_ProjectToTechnology`;

-- CreateTable
CREATE TABLE `TechnologiesOnProjects` (
    `projectId` INTEGER NOT NULL,
    `technologyId` INTEGER NOT NULL,
    `assignedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `assignedBy` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`projectId`, `technologyId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TechnologiesOnProjects` ADD CONSTRAINT `TechnologiesOnProjects_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TechnologiesOnProjects` ADD CONSTRAINT `TechnologiesOnProjects_technologyId_fkey` FOREIGN KEY (`technologyId`) REFERENCES `Technology`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
