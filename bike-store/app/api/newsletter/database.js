import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

const databaseDir = path.join(process.cwd(), 'database');
const databasePath = path.join(databaseDir, 'newsletter.db');

if (!fs.existsSync(databaseDir)) {
    fs.mkdirSync(databaseDir, { recursive: true });
}

const database = new Database(databasePath, { verbose: console.log });

const createTableQuery = `
    CREATE TABLE IF NOT EXISTS Newsletter (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL UNIQUE
    )
`;
database.exec(createTableQuery);

export default database;