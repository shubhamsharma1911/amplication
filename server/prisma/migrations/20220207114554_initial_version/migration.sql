-- CreateEnum
CREATE TYPE "EnumUserStatus" AS ENUM ('Pending', 'Approved', 'Active', 'Blocked', 'Removed');

-- CreateEnum
CREATE TYPE "EnumUserType" AS ENUM ('Student', 'Teacher', 'Manager', 'Parent', 'Volunteer');

-- CreateEnum
CREATE TYPE "EnumCustomerStatus" AS ENUM ('Pending', 'Approved', 'Active', 'Blocked', 'Removed');

-- CreateEnum
CREATE TYPE "EnumFacilityFacilityType" AS ENUM ('School', 'University', 'College');

-- CreateEnum
CREATE TYPE "EnumFacilityStatus" AS ENUM ('Pending', 'Approved', 'Active', 'Blocked', 'Removed');

-- CreateEnum
CREATE TYPE "EnumDeviceDeviceType" AS ENUM ('KeyStone', 'KeyTab');

-- CreateEnum
CREATE TYPE "EnumDeviceStatus" AS ENUM ('Pending', 'Approved', 'Active', 'Blocked', 'Removed');

-- CreateEnum
CREATE TYPE "EnumProviderStatus" AS ENUM ('Pending', 'Approved', 'Active', 'Blocked', 'Removed');

-- CreateEnum
CREATE TYPE "EnumContentContentType" AS ENUM ('Video', 'Audio', 'Ebook', 'Game');

-- CreateEnum
CREATE TYPE "EnumContentStatus" AS ENUM ('Pending', 'Approved', 'Active', 'Blocked', 'Removed');

-- CreateEnum
CREATE TYPE "EnumRuleRuleType" AS ENUM ('Provider', 'ContentType', 'Language');

-- CreateTable
CREATE TABLE "User" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customerIdId" TEXT,
    "devicesId" TEXT,
    "email" TEXT NOT NULL,
    "facilityIdId" TEXT,
    "firstName" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "roles" TEXT[],
    "rollNumber" TEXT,
    "status" "EnumUserStatus" NOT NULL,
    "type" "EnumUserType" NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "addressLine_1" TEXT NOT NULL,
    "addressLine_2" TEXT,
    "addressLine_3" TEXT,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "pincode" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "status" "EnumCustomerStatus" NOT NULL,
    "telephone" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Facility" (
    "addressLine_1" TEXT NOT NULL,
    "addressLine_2" TEXT,
    "addressLine_3" TEXT,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customerIdId" TEXT NOT NULL,
    "devicesId" TEXT,
    "email" TEXT NOT NULL,
    "facilityType" "EnumFacilityFacilityType" NOT NULL,
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "primaryContact" TEXT NOT NULL,
    "secondaryContact" TEXT,
    "state" TEXT NOT NULL,
    "status" "EnumFacilityStatus" NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "zipCode" TEXT NOT NULL,

    CONSTRAINT "Facility_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Device" (
    "facilityId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deviceId" TEXT NOT NULL,
    "deviceType" "EnumDeviceDeviceType" NOT NULL,
    "id" TEXT NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "status" "EnumDeviceStatus" NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Device_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Provider" (
    "addressLine_1" TEXT NOT NULL,
    "addressLine_2" TEXT,
    "addressLine_3" TEXT,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT,
    "email" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "pincode" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "status" "EnumProviderStatus" NOT NULL,
    "Telephone" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Provider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Content" (
    "contentType" "EnumContentContentType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT,
    "hasPrerequiste" TEXT,
    "id" TEXT NOT NULL,
    "parent" TEXT,
    "providerId" TEXT NOT NULL,
    "related" TEXT,
    "status" "EnumContentStatus" NOT NULL,
    "title" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Content_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "File" (
    "available" BOOLEAN NOT NULL,
    "checksum" TEXT NOT NULL,
    "contentIdId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fileExt" TEXT NOT NULL,
    "fileSize" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "name" TEXT,
    "thumbnail" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rule" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "facilityIdId" TEXT NOT NULL,
    "filter" TEXT,
    "id" TEXT NOT NULL,
    "rule" JSONB NOT NULL,
    "ruleType" "EnumRuleRuleType" NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Rule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Facility_email_key" ON "Facility"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_customerIdId_fkey" FOREIGN KEY ("customerIdId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_facilityIdId_fkey" FOREIGN KEY ("facilityIdId") REFERENCES "Facility"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Facility" ADD CONSTRAINT "Facility_customerIdId_fkey" FOREIGN KEY ("customerIdId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Device" ADD FOREIGN KEY ("facilityId") REFERENCES "Facility"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Device" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Content" ADD CONSTRAINT "Content_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "Provider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_contentIdId_fkey" FOREIGN KEY ("contentIdId") REFERENCES "Content"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rule" ADD CONSTRAINT "Rule_facilityIdId_fkey" FOREIGN KEY ("facilityIdId") REFERENCES "Facility"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
