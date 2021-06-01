// import React, { useState } from "react";

export default function Card(props) {
  const round = () => {
    props.select(props.id, props.img);
    props.selected ? props.lose() : props.win();
  };
  return (
    <div onClick={round} className="card">
      <img src={props.img}></img>
    </div>
  );
}
