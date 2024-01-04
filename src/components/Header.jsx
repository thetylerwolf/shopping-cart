import Cart from "./Cart";

function Header() {
  return (
    <div
      style={{
        backgroundColor: "#282c34",
        minHeight: 60,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        display: "flex",
        fontSize: "2em",
        color: "white",
      }}
    >
      <div>My Shop</div>
      <Cart />
    </div>
  );
}

export default Header;
