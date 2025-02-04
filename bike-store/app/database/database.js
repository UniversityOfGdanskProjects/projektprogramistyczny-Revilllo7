import Database from 'better-sqlite3';

const database = new Database('database/newsletter.db');

export default database;