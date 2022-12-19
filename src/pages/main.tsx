import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../components/Card";
import { Modal } from "../components/Modal";
import { IUser } from "../types";
import "../App.css";
import { useDispatch } from "react-redux";
import { ActionUser } from "../redux/Action";
import { useSelector } from "react-redux";
import { stateType } from "../redux/Reducer";

function Main() {
  // const [users, setUsers] = useState<IUser[] | null>(null);
  const users=useSelector((state: stateType)=>state.users)
  const [modalData, setModalData] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  console.log(users)

  useEffect(() => {
    setLoading(true);
     axios
      .get<IUser[]>("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => {
        //setUsers(data);
        setLoading(false);
        dispatch(ActionUser(data!))
      });
     

    }, []);

    
   

  const handleCardClick = (user: IUser) => {
    setModalData(user);
    
  };

  const handleModalClose = () => {
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
      {modalData && Object.keys(modalData).length > 0 && (
        <Modal user={modalData} onClose={handleModalClose} />
      )}

      <section className="container">
        <h1>USERS</h1>
        <div className="containerCard">
          {users?.map((user:IUser) => (
            <Card
              key={user.id}
              name={user.name}
              onClick={() => handleCardClick(user)}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Main;
