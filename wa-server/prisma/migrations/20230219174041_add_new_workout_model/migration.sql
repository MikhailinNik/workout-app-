/*
  Warnings:

  - You are about to drop the column `image` on the `Exercise` table. All the data in the column will be lost.
  - Added the required column `icon_path` to the `Exercise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workoutId` to the `Exercise` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Exercise" DROP COLUMN "image",
ADD COLUMN     "icon_path" TEXT NOT NULL,
ADD COLUMN     "workoutId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Workout" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Workout_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workout"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
