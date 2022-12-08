import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../components/Card";
import { Modal } from "../components/Modal";
import { IUser } from "../types";
import "../App.css";

function Main() {
  const [users, setUsers] = useState<IUser[] | null>(null);
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get<IUser[]>("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => setUsers(data))
      .finally(() => setLoading(false));
  }, []);

  const handleCardClick = (user: IUser) => {
    setModalData(user);
    setModal(true);
  };

  const handleModalClose = () => {
    setModal(false);
    setModalData(null);
  };

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      {modal && modalData && Object.keys(modalData).length > 0 && (
        <Modal user={modalData} onClose={handleModalClose} />
      )}

      <section className="container">
        <h1>USERS</h1>
        <div className="containerCard">
          {users?.map((user, index) => (
            <>
              <Card
                key={index}
                name={user.name}
                username={user.username}
                onClick={() => handleCardClick(user)}
              />
            </>
          ))}
        </div>
      </section>
    </>
  );
}

export default Main;
