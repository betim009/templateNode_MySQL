require("dotenv").config();
const mysql = require("mysql2/promise");

const {
  DB_HOST = "localhost",
  DB_PORT = "3306",
  DB_USER = "root",
  DB_PASSWORD = "",
  DB_NAME = "exemplo",
  DB_WAIT_FOR_CONNECTIONS = "true",
  DB_CONNECTION_LIMIT = "10",
  DB_QUEUE_LIMIT = "0",
} = process.env;

const connection = mysql.createPool({
  host: DB_HOST,
  port: Number(DB_PORT),
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  waitForConnections: DB_WAIT_FOR_CONNECTIONS === "true",
  connectionLimit: Number(DB_CONNECTION_LIMIT),
  queueLimit: Number(DB_QUEUE_LIMIT),
});

module.exports = connection;
