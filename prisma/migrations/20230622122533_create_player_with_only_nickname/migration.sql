-- CreateTable
CREATE TABLE "Player" (
    "id" SERIAL NOT NULL,
    "nickname" VARCHAR(255) NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);
