export default function Card(props) {
  const round = () => {
    props.select(props.id, props.img);
    props.selected ? props.lose() : props.win();
  };
  return (
    <div onClick={round} className="card">
      <img alt="" src={props.img}></img>
    </div>
  );
}
