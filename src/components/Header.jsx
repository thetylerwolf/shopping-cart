import { Link } from "react-router-dom";
import Cart from "./Cart";

function Header({ cartItems }) {
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
      <div>Duck Shop</div>
      <div style={{ marginLeft: "auto" }}>
        <Link to="/cart">
          <Cart cartItems={cartItems} />
        </Link>
      </div>
    </div>
  );
}

export default Header;
