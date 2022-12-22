import express from "express";
import cors from "cors";
import { connection } from "./db/database.js";
import signRoute from "./routes/singRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(signRoute);

app.listen(4000, () => {
  console.log(`Server runing`);
});
