// import React, { useState } from "react";

export default function Card(props) {
  const round = () => {
    props.select(props.id);
    props.selected ? props.lose() : props.win();
  };
  return (
    <div onClick={round} className="card">
      {props.id}
      {props.selected.toString()}
    </div>
  );
}
