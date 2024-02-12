-- CreateTable
CREATE TABLE `ResistorColorCode` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `color` VARCHAR(191) NOT NULL,
    `digit` INTEGER NULL,
    `multiplier` BIGINT NOT NULL,
    `tolerance` DECIMAL(65, 30) NULL,

    UNIQUE INDEX `ResistorColorCode_color_key`(`color`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
