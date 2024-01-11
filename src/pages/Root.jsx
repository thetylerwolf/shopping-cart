import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Root({ cartItems }) {
  return (
    <>
      <Header cartItems={cartItems} />
      <Outlet />
    </>
  );
}

export default Root;
