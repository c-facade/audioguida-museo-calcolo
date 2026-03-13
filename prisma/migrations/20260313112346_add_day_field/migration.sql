/*
  Warnings:

  - You are about to drop the column `browserLang` on the `Visit` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Visit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "path" TEXT NOT NULL,
    "language" TEXT,
    "selectedLang" TEXT,
    "isNew" BOOLEAN NOT NULL,
    "referrer" TEXT,
    "userAgent" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "day" TEXT
);
INSERT INTO "new_Visit" ("createdAt", "id", "isNew", "language", "path", "referrer", "selectedLang", "userAgent") SELECT "createdAt", "id", "isNew", "language", "path", "referrer", "selectedLang", "userAgent" FROM "Visit";
DROP TABLE "Visit";
ALTER TABLE "new_Visit" RENAME TO "Visit";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
