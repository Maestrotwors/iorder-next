/*
  Warnings:

  - You are about to drop the `userRole` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_role_fkey";

-- DropTable
DROP TABLE "userRole";
