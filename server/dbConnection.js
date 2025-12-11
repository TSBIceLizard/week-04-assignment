// TODO set up a pool to connect to our DB Like the other day!

// dbConnection.js file
//imports

import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

export const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

//================================
