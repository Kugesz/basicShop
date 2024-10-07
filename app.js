import express from "express";
import { adminRoutes } from "./routes/admin.js";
import shopRoutes from "./routes/shop.js";
import bodyParser from "body-parser";
import __dirname from "./util/rootpath.js";
import path from "path";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use("/", shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404.ejs", { pageTitle: "Page Not Found" });
});

app.listen(PORT, () => {
  console.log(`Server is runnig on on: http://localhost:${PORT}`);
});
