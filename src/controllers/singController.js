import * as signRepository from "../repositories/signRepositories.js";
async function signup(req, res) {
  const { name, email, password, confirmPassword } = req.body;
  if (!name || !email || !password || !confirmPassword) {
    return res.status(422).send("Campos invalidos");
  }
  if (password !== confirmPassword) {
    return res.status(422).send("Senhas são diferentes");
  }
  try {
    await signRepository.insertUser({ name, email, password });

    return res.send(201);
  } catch (error) {
    console.error(error);
    return res.send(error);
  }
}
async function signin(req, res) {
  return res.status(422).send(200);
}

export { signin, signup };
