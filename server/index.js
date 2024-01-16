const express = require("express");
const cors = require("cors");
const products = require("./products.json");
const { addItem, removeItem } = require("./helpers");

const app = express();
const port = 8080;

const state = {
  count: 0,
  totalCost: 0,
  cart: [],
};

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, do you like ducks?");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((product) => product.id === +id);
  res.json(product || { error: "Product not found" });
});

app.get("/cart", (req, res) => {
  res.json(state);
});

app.put("/cart/add", (req, res) => {
  addItem(state, req.body.id, req.body.quantity);
  res.json(state);
});

app.put("/cart/remove", (req, res) => {
  removeItem(state, req.body.id, req.body.quantity);
  res.json(state);
});

app.delete("/cart", (req, res) => {
  state.cart = [];
  state.count = 0;
  state.totalCost = 0;
  res.send(state);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
