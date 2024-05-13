import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { incrementAction, decrementAction } from "./store/countere";

export default function Counting() {
  let selector = useSelector((state) => state.countere);
  let dispatch = useDispatch();

  const IncreaseValue = () => {
    dispatch(incrementAction(""));
  };
  const DecreaseValue = () => {
    dispatch(decrementAction(""));
  };
  const style = {
    margin: "2px",
  };
  return (
    <div>
      Count : {selector}
      <div>
        <Button style={style} variant="info" onClick={() => IncreaseValue()}>
          Increse
        </Button>
        <Button style={style} variant="dark" onClick={() => DecreaseValue()}>
          Decrease
        </Button>
      </div>
    </div>
  );
}
