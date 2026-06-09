import express from "express";
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.PORT,
});


app.get("/", (req, res) => {
  res.send("Hello World!");
})

app.post("/register", (req, res) => {
  const { name, email, password, birthDate } = req.body;

  res.json({message: "Test"});
});

const port = 3931;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});