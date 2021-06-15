export default function Card({ round, selected, id, img }) {
  return (
    <div onClick={() => round(selected, id, img)} className="card">
      <img alt="a playing card" src={img}></img>
    </div>
  );
}
