import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pkg;

const databaseConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
};
//const connection = new Pool(databaseConfig);

const connection = new Pool({
  host: "Localhost",
  port: 5432,
  user: "postgres",
  password: "2038",
  database: "shortly",
});

export { connection };
