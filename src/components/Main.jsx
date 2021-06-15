import React, { useState } from "react";
import Card from "./Card";
import { initialCards } from "../themes/themeGenerator";
import { shuffle } from "lodash";

export default function Main(props) {
  const [cards, setCards] = useState(shuffle(initialCards));

  // Have used this pattern a couple of times - adding extra bits to a prop that is passed down several times.
  // Is this optimal? Would it be better to just push all the relevant state up even higher and have a single
  // definitive function?
  const round = (lose, id, img) => {
    select(id, img);
    props.round(lose);
    if (lose) setCards(shuffle(initialCards));
  };

  // A lot of code to flick a boolean for a single card in the array, but that's the functional approach
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
              round={round}
            />
          );
        })
        .slice(0, 28)}
    </main>
  );
}
