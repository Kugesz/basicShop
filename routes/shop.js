import express from "express";
import root from "../util/rootpath.js";
import path from "path";
import { products } from "./admin.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("shop.ejs", { pageTitle: "Shop" });
});

export default router;
