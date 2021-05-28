import Card from "./Card";

export default function NewCards(props) {
  return (
    <div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((val) => (
        <div>Val</div>
      ))}
    </div>
  );
}
// <Card win={props.win} lose={props.lose} id={val} />
