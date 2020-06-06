import express from "express";
import cors from "cors";
import path from "path";
import routes from "../routes";
import { errors } from "celebrate";

const app = express();

const port = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(
  "/tmp/items",
  express.static(path.resolve(__dirname, "..", "..", "tmp", "items"))
);

app.use(errors());

app.listen(port);
