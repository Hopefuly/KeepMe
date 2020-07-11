import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../action";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

// Fungsi dari component bagian kode ini adalah untuk membuat fitur yang mampu membuat perhitungan menggunakan state management dari redux

function Count() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="count">
      <h1>
        Counter : <span className="counter">{counter}</span>
      </h1>
      <div className="button">
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          <RemoveIcon />
        </button>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          <AddIcon />
        </button>
      </div>
    </div>
  );
}

export default Count;
