import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Navbar() {
  const { quantity } = useSelector((store) => store.cart);

  return (
    <nav>
      <h2>Course App</h2>
      <Badge badgeContent={quantity} color="error">
        {" "}
        <Link to={"/basket"}>
          <ShoppingBasketIcon fontSize="medium" />{" "}
        </Link>
      </Badge>{" "}
    </nav>
  );
}

export default Navbar;
