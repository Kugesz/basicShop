import express from "express";
import root from "../util/rootpath.js";
import path from "path";

const router = express.Router();
const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product.ejs", { pageTitle: "Products" });
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body.title);
  products.push({ title: req.body.title });
  const title = req.body.title;
  res.status(301).redirect("/");
});

export { router as adminRoutes, products };
