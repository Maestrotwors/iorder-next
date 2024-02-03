/*
  Warnings:

  - You are about to drop the column `roleUuid` on the `user` table. All the data in the column will be lost.
  - Added the required column `role` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_roleUuid_fkey";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "roleUuid",
ADD COLUMN     "role" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_role_fkey" FOREIGN KEY ("role") REFERENCES "userRole"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
