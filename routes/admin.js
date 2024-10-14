import express from "express";
import root from "../util/rootpath.js";
import path from "path";

import * as productControllers from "../controllers/products.js";

const router = express.Router();

router.get("/add-product", productControllers.getAddProduct);

router.post("/add-product", productControllers.postAddProduct);

export default router;
