import "./Card.css";

interface ICard {
  name: string;
  username: string;
  onClick: () => void;
}

export const Card = ({ name, username, onClick }: ICard) => {
  return (
    <div className="card-wrapper" onClick={onClick}>
      <aside className="card yellow">
        <p>
          <h3>{name}</h3>
        </p>
        <span className="fold"></span>
      </aside>
    </div>
  );
};
{
}
