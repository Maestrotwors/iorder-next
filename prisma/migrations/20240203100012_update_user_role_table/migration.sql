/*
  Warnings:

  - You are about to drop the column `role` on the `user` table. All the data in the column will be lost.
  - Added the required column `roleUuid` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "role",
ADD COLUMN     "roleUuid" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "userRole" (
    "id" SERIAL NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "userRole_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "userRole_role_key" ON "userRole"("role");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_roleUuid_fkey" FOREIGN KEY ("roleUuid") REFERENCES "userRole"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
