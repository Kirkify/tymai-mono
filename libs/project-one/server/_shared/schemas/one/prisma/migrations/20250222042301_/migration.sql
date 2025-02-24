-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "prId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "issues" VARCHAR(10000)[] DEFAULT ARRAY[]::VARCHAR(10000)[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Review_prId_key" ON "Review"("prId");

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
