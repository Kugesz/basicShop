import express from "express";
import root from "../util/rootpath.js";
import path from "path";
import { Product } from "../model/product.js";

import * as productController from "../controllers/products.js";

const router = express.Router();

router.get("/", productController.getAllProducts);

export default router;
