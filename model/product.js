import fs from "fs";
import path from "path";

import __dirname from "../util/rootpath.js";
import { FILE } from "dns";

const FILE_PATH = path.join(__dirname, "data", "products.json");

const fecthData = () => {
  let content = [];

  try {
    content = JSON.parse(fs.readFileSync(FILE_PATH));
  } catch (err) {
    console.log(`File reading error ${err}`);
  }
  return content;
};

const setData = (content) => {
  try {
    fs.writeFileSync(FILE_PATH, JSON.stringify(content));
  } catch (err) {
    console.log(`File writing error ${err}`);
  }
};

export class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    const products = fecthData();
    products.push(this);
    setData(products);
  }

  static fetchAll() {
    return fecthData();
  }
}
