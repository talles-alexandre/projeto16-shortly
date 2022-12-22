import pkg from "pg";

const { Pool } = pkg;
const connection = new Pool({
  host: "Localhost",
  port: 5432,
  user: "postgres",
  password: "2038",
  database: "shortly",
});

export { connection };
