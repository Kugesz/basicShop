import { Product } from "../model/product.js";

export const getAddProduct = (req, res, next) => {
  res.render("add-product.ejs", { pageTitle: "Products" });
};

export const postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const product = new Product(title);
  product.save();
  res.status(301).redirect("/");
};

export const getAllProducts = (req, res, next) => {
  res.render("shop.ejs", {
    pageTitle: "Shop",
    prods: Product.fetchAll(),
    path: "/",
  });
};
