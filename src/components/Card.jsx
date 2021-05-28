import React, { useState } from "react";

export default function Card(props) {
  const [selected, setSelected] = useState(false);
  const round = () => {
    selected ? props.lose() : props.win();
    setSelected(true);
  };
  return (
    <div onClick={round} className="card">
      {props.id}
      {selected.toString()}
    </div>
  );
}
