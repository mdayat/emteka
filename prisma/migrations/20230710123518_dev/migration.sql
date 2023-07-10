-- CreateEnum
CREATE TYPE "enum_kelas" AS ENUM ('Kelas_12', 'Kelas_11', 'Kelas_10');

-- CreateEnum
CREATE TYPE "enum_kurikulum" AS ENUM ('merdeka', 'k13_darurat', 'k13');

-- CreateEnum
CREATE TYPE "enum_topic" AS ENUM ('trigonometri', 'geometri');

-- CreateEnum
CREATE TYPE "enum_tingkat_kesulitan" AS ENUM ('C1', 'C2', 'C3', 'C4', 'C5', 'C6');

-- CreateEnum
CREATE TYPE "enum_tipe_soal" AS ENUM ('utama', 'prerequisite_dasar', 'prerequisite_turunan');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "kelas" "enum_kelas",
    "kurikulum" "enum_kurikulum",
    "institusi" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "assesment" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "materialId" TEXT NOT NULL,

    CONSTRAINT "assesment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "material" (
    "id" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "topik" "enum_topic" NOT NULL,
    "kelas" "enum_kelas" NOT NULL,
    "kurikulum" "enum_kurikulum" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "relatedMaterialId" TEXT NOT NULL,
    "soalId" TEXT NOT NULL,

    CONSTRAINT "material_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "related_material" (
    "id" TEXT NOT NULL,

    CONSTRAINT "related_material_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "soal" (
    "id" TEXT NOT NULL,
    "pertanyaan" TEXT NOT NULL,
    "tingkat_kesulitan" "enum_tingkat_kesulitan" NOT NULL,
    "tipe" "enum_tipe_soal" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "soal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nilai_soal" (
    "id" TEXT NOT NULL,
    "nilai" DECIMAL(65,30) NOT NULL,
    "soalId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "nilai_soal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "opsi" (
    "id" TEXT NOT NULL,
    "opsi_benar" BOOLEAN NOT NULL,
    "soalId" TEXT NOT NULL,

    CONSTRAINT "opsi_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "assesment_id_key" ON "assesment"("id");

-- CreateIndex
CREATE UNIQUE INDEX "material_id_key" ON "material"("id");

-- CreateIndex
CREATE UNIQUE INDEX "material_relatedMaterialId_key" ON "material"("relatedMaterialId");

-- CreateIndex
CREATE UNIQUE INDEX "material_soalId_key" ON "material"("soalId");

-- CreateIndex
CREATE UNIQUE INDEX "related_material_id_key" ON "related_material"("id");

-- CreateIndex
CREATE UNIQUE INDEX "soal_id_key" ON "soal"("id");

-- CreateIndex
CREATE UNIQUE INDEX "nilai_soal_id_key" ON "nilai_soal"("id");

-- CreateIndex
CREATE UNIQUE INDEX "opsi_id_key" ON "opsi"("id");

-- CreateIndex
CREATE UNIQUE INDEX "opsi_soalId_key" ON "opsi"("soalId");

-- AddForeignKey
ALTER TABLE "assesment" ADD CONSTRAINT "assesment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assesment" ADD CONSTRAINT "assesment_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "material"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "material" ADD CONSTRAINT "material_relatedMaterialId_fkey" FOREIGN KEY ("relatedMaterialId") REFERENCES "related_material"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "material" ADD CONSTRAINT "material_soalId_fkey" FOREIGN KEY ("soalId") REFERENCES "soal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nilai_soal" ADD CONSTRAINT "nilai_soal_soalId_fkey" FOREIGN KEY ("soalId") REFERENCES "soal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nilai_soal" ADD CONSTRAINT "nilai_soal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "opsi" ADD CONSTRAINT "opsi_soalId_fkey" FOREIGN KEY ("soalId") REFERENCES "soal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
