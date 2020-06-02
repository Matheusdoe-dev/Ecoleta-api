import express from "express";

// Controllers
import ItemsController from "./controllers/ItemsController";
import PointsController from "./controllers/PointsController";

const routes = express.Router();

// listagem de items
routes.get("/items", ItemsController.index);

// criação de pontos de coleta
routes.post("/points", PointsController.create);

// listagem de pontos de coleta
routes.get("/points", PointsController.index);

// listagem de um único ponto de coleta
routes.get("/points/:id", PointsController.show);

export default routes;
