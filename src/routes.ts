import express from "express";
import { celebrate, Joi } from "celebrate";

import multer from "multer";
import multerConfig from "./config/multer";

// Controllers
import ItemsController from "./controllers/ItemsController";
import PointsController from "./controllers/PointsController";

const routes = express.Router();
const upload = multer(multerConfig);

// listagem de items
routes.get("/items", ItemsController.index);

// criação de pontos de coleta
routes.post(
  "/points",
  upload.single("image"),
  celebrate(
    {
      body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required,
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().max(2),
        items: Joi.string().required(),
      }),
    },
    {
      abortEarly: false,
    }
  ),
  PointsController.create
);

// listagem de pontos de coleta
routes.get("/points", PointsController.index);

// listagem de um único ponto de coleta
routes.get("/points/:id", PointsController.show);

export default routes;
