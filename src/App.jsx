import { useState } from "react";
import { Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Newjs from "./Components/newjs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Calculator } from "./Control/Cartslice";
import Home from "./Components/Home";

function App() {
  const { cartitems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Calculator());
  }, [cartitems]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Newjs />} />
      </Routes>
    </>
  );
}

export default App;
