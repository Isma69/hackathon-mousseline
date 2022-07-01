/*
  Warnings:

  - Added the required column `premise` to the `actuality` table without a default value. This is not possible if the table is not empty.
  - Added the required column `urlPicture` to the `actuality` table without a default value. This is not possible if the table is not empty.
  - Added the required column `premise` to the `learning` table without a default value. This is not possible if the table is not empty.
  - Added the required column `urlPicture` to the `learning` table without a default value. This is not possible if the table is not empty.
  - Added the required column `premise` to the `share` table without a default value. This is not possible if the table is not empty.
  - Added the required column `urlPicture` to the `share` table without a default value. This is not possible if the table is not empty.
  - Added the required column `premise` to the `source` table without a default value. This is not possible if the table is not empty.
  - Added the required column `urlPicture` to the `source` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `actuality` ADD COLUMN `premise` VARCHAR(255) NOT NULL,
    ADD COLUMN `urlPicture` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `learning` ADD COLUMN `premise` VARCHAR(255) NOT NULL,
    ADD COLUMN `urlPicture` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `share` ADD COLUMN `premise` VARCHAR(255) NOT NULL,
    ADD COLUMN `urlPicture` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `source` ADD COLUMN `premise` VARCHAR(255) NOT NULL,
    ADD COLUMN `urlPicture` VARCHAR(255) NOT NULL;
