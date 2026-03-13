/*
  Warnings:

  - You are about to drop the column `selectedLang` on the `Visit` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Visit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "path" TEXT NOT NULL,
    "language" TEXT,
    "browserLang" TEXT,
    "isNew" BOOLEAN NOT NULL,
    "referrer" TEXT,
    "userAgent" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "day" TEXT
);
INSERT INTO "new_Visit" ("createdAt", "day", "id", "isNew", "language", "path", "referrer", "userAgent") SELECT "createdAt", "day", "id", "isNew", "language", "path", "referrer", "userAgent" FROM "Visit";
DROP TABLE "Visit";
ALTER TABLE "new_Visit" RENAME TO "Visit";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
