import { products } from "../routes/admin";

export const getAddProduct = (req, res, next) => {
  res.render("add-product.ejs", { pageTitle: "Products" });
};

export const postAddProduct = (req, res, next) => {
  console.log(req.body.title);
  products.push({ title: req.body.title });
  const title = req.body.title;
  res.status(301).redirect("/");
};

export const getAllProducts = (req, res, next) => {
  res.render("shop.ejs", { pageTitle: "Shop", prods: products });
};
