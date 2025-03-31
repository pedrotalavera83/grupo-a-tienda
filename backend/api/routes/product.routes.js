import { Router } from "express";
import { getAllProducts, getProductById, createProduct, updateProductById } from "../controllers/product.controller.js";

const producRouter = Router();

producRouter.get('/', getAllProducts);
producRouter.get('/:idProduct', getProductById);
producRouter.post('/', createProduct);
producRouter.put('/:idProduct', updateProductById);

export default producRouter;

