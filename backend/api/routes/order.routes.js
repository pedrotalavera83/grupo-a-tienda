import { Router } from "express";
import { getOrders, createOrder } from "../controllers/order.controller.js";

const orderRouter = Router();

// Regresa todas las ordenes del usuario que haga la petición
orderRouter.get("/", getOrders);

// Crea una nueva orden asociada al usuario que haga la petición
orderRouter.post("/", createOrder);

export default orderRouter;

