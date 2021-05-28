import Card from "./Card";

export default function Main(props) {
  return (
    <main>
      {props.cards.map((card) => {
        return (
          <Card
            key={card.id}
            id={card.id}
            selected={card.selected}
            win={props.win}
            lose={props.lose}
          />
        );
      })}
    </main>
  );
}
