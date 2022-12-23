import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import { connection } from "../db/database.js";

async function signup(req, res) {
  const { name, email, password } = req.body;

  const hashPassword = bcrypt.hashSync(password, 10);

  try {
    connection.query(
      `INSERT INTO users (name, email, password) VALUES ($1, $2, $3);`,
      [name, email, hashPassword]
    );
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    return res.send(error);
  }
}
async function signin(req, res) {
  const token = uuidv4();
  const { userId } = res.locals;

  connection.query(`INSERT INTO sessions ("usersId", token) VALUES ($1, $2);`, [
    userId,
    token,
  ]);

  res.status(200).send({ token: token });
}

export { signin, signup };
