import "./index.css";

interface ICard {
  name: string;
  onClick: () => void;
}

export const Card = ({ name, onClick }: ICard) => {
  return (
    <div className="card-wrapper" onClick={onClick}>
      <div className="card yellow">
        <div className="cardContent">
          <h3>{name}</h3>
        </div>
        <span className="fold"></span>
      </div>
    </div>
  );
};
{
}
