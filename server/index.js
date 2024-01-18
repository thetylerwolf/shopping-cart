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

/**
 * @description Get the root route
 * @route GET /
 * @returns {object} - A welcome message
 */
app.get("/", (req, res) => {
  res.json({ text: "Hello, do you like ducks?" });
});

/**
 * @description Get all products
 * @route GET /products
 * @returns {array} - An array of all products
 */
app.get("/products", (req, res) => {
  res.json(products);
});

/**
 * @description Get a single product by ID
 * @route GET /products/:id
 * @returns {object} - The product with the given ID, or an error message if the product is not found
 */
app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((product) => +product.id === +id);
  res.json(product || { error: "Product not found" });
});

/**
 * @description Get the current state of the cart
 * @route GET /cart
 * @returns {object} - The current state of the cart
 */
app.get("/cart", (req, res) => {
  res.json(state);
});

/**
 * @description Add an item to the cart - returns updated state of the cart
 * @route PUT /cart/add
 * @returns {object} - The updated state of the cart
 */
app.put("/cart/add", (req, res) => {
  addItem(state, req.body.id, req.body.quantity);
  res.json(state);
});

/**
 * @description Remove an item from the cart - returns updated state of the cart
 * @route PUT /cart/remove
 * @returns {object} - The updated state of the cart
 */
app.put("/cart/remove", (req, res) => {
  removeItem(state, req.body.id, req.body.quantity);
  res.json(state);
});

/**
 * @description Delete all items from the cart
 * @route DELETE /cart
 * @returns {object} - The updated state of the cart
 */
app.delete("/cart", (req, res) => {
  state.cart = [];
  state.count = 0;
  state.totalCost = 0;
  res.send(state);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
