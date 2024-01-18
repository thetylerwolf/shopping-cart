const products = require("./products.json");

function addRemoveItem(state, id, quantity) {
  let foundItemInCart = false;

  state.cart.forEach((d) => {
    let newCount = d.count;

    if (+d.id === +id) {
      foundItemInCart = true;
      newCount = newCount + quantity;
    }

    d.count = newCount;
  });

  if (!foundItemInCart && quantity > 0) {
    state.cart.push({ id: +id, count: quantity });
  }

  recalculateState(state);

  return state;
}

function addItem(state, id, quantity) {
  return addRemoveItem(state, id, quantity);
}

function removeItem(state, id, quantity) {
  return addRemoveItem(state, id, -quantity);
}

function recalculateState(state) {
  let count = 0,
    totalCost = 0;

  state.cart = state.cart.filter((d) => d.count > 0);

  state.cart.forEach((item) => {
    const p = products.find((product) => +product.id === +item.id);
    if (!p) return;
    count += item.count;
    totalCost += p.price * item.count;
  });

  state.count = count;
  state.totalCost = totalCost;
}

module.exports = {
  addItem,
  removeItem,
};
