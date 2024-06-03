import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  
  const count = useSelector(state => state.counter1);
  console.log("counts", count);
  const dispatch = useDispatch();
  
  return ( 
    <div>I am navbar and counter is {count}</div>
  )
}

export default Navbar;
