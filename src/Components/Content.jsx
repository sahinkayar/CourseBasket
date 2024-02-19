import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Button } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CartRemove } from "../Control/Cartslice";
import { removeitem } from "../Control/Cartslice";
import { increment } from "../Control/Cartslice";
import { decrement } from "../Control/Cartslice";
function Content() {
  const dispatch = useDispatch();
  const { cartitems, quantity, total } = useSelector((store) => store.cart);

  return (
    <Container>
      <h1>Basket</h1>
      {cartitems.map((cart) => {
        return (
          <div>
            <div key={cart.id} className="div-item">
              <img src={cart.img} alt="" />
              <div className="div-info">
                <h3>{cart.title}</h3>
                <h4 color="error">Price :{cart.price} TL</h4>{" "}
                <Button onClick={() => dispatch(increment(cart.id))}>
                  {" "}
                  <KeyboardArrowUpIcon />{" "}
                </Button>{" "}
                <p className="quantity">{cart.quantity}</p>
                <Button onClick={() => dispatch(decrement(cart.id))}>
                  {" "}
                  <KeyboardArrowDownIcon />{" "}
                </Button>
                <p className="btn-P">
                  <Button
                    variant="contained"
                    color="error"
                    sx={{ mt: "14px", textAlign: "center" }}
                    onClick={() => {
                      dispatch(removeitem(cart.id));
                    }}
                  >
                    Delete
                  </Button>
                </p>{" "}
              </div>
            </div>
          </div>
        );
      })}{" "}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "20px",
        }}
      >
        <h4>
          Total Cost <span>{total} TL</span>
        </h4>{" "}
        <Button
          variant="contained"
          sx={{ width: "100px", mt: "15px" }}
          onClick={() => dispatch(CartRemove())}
        >
          Clear
        </Button>
      </div>
    </Container>
  );
}

export default Content;
