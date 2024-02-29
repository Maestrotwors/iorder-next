/*
  Warnings:

  - Changed the type of `role` on the `userRole` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "userRole" DROP COLUMN "role",
ADD COLUMN     "role" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "userRole_role_key" ON "userRole"("role");
