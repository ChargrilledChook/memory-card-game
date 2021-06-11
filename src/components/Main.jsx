import React, { useState } from "react";
import Card from "./Card";
import { initialCards } from "../themes/themeGenerator";
import { shuffle } from "lodash";

export default function Main(props) {
  const [cards, setCards] = useState(shuffle(initialCards));

  const lose = () => {
    props.lose();
    setCards(shuffle(initialCards));
    console.log(cards);
  };

  const win = () => {
    props.win();
  };

  const select = (key, img) => {
    setCards(
      shuffle(
        cards.map((card) =>
          card.id === key ? { id: key, selected: true, img: img } : card
        )
      )
    );
  };

  return (
    <main>
      {cards
        .map((card) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              selected={card.selected}
              img={card.img}
              select={select}
              win={win}
              lose={lose}
            />
          );
        })
        .slice(0, 28)}
    </main>
  );
}
