import React, { useState } from "react";
import getUsers from "../../service/api/get-users";
import Modal from "../../components/modal/modal";
import UserCard from "../../components/user-card/user-card";
import ListUserInformation from "../../components/list-user-information/list-user-information";
import styles from "./users.module.css";

export default function Users() {
  const [theModalIsOpen, setTheModalIsOpen] = useState(false);
  const [infoUser, setInfoUser] = useState();

  let data = getUsers.read();

  const handlerUser = (e) => {
    let userId = e.target.value;
    let userData = data.find((e) => e.id == userId);
    setTheModalIsOpen(true);
    setInfoUser(userData);
  };

  const handlerModal = () => {
    setTheModalIsOpen(false);
  };

  return (
    <>
      <header>
        <h1>Users</h1>
      </header>
      <article className={styles.listOfNames}>
        <h2 className={styles.title}>List of names</h2>
        <article className={styles.usersCards}>
          {data.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
              buttonFunction={handlerUser}
              value={user.id}
            />
          ))}
        </article>
        <Modal theModalIsOpen={theModalIsOpen} buttonFunction={handlerModal}>
          <ListUserInformation userInfo={infoUser} />
        </Modal>
      </article>
    </>
  );
}
