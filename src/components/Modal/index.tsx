import { Link } from "react-router-dom";
import { IUser } from "../../types";
import "./index.css";

interface IModal {
  onClose(): void;
  user: IUser;
}

export const Modal = ({ onClose, user }: IModal) => {
  return (
    <section className="modalBackground">
      <div className="modalContainer">
        Name: <h3> {user.name}</h3>
        <br />
        Adress:
        <h3>{user.address.city}</h3>
        <br />
        email:
        <h3>{user.email}</h3>
        <br />
        phone:
        <h3>{user.phone}</h3>
        <br />
        website:
        <h3>{user.website}</h3>
        <br />
        <Link to={`user/${user.id}/posts`} style={{ textDecoration: "none" }}>
          <div className="postLink">Posts</div>
        </Link>
      </div>
      <button id="cancelBtn" onClick={onClose}>
        X
      </button>
    </section>
  );
};
