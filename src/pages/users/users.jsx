import React, { useState } from "react";
import getUsers from "../../service/api/get-users";
import styles from "./users.module.css";
//
import Modal from "../../components/modal/modal";
import UserCard from "../../components/user-card/user-card";

export default function Users() {
  const [theModalIsOpen, setTheModalIsOpen] = useState(false);
  const [infoUser, setInfoUser] = useState();

  let data = getUsers.read();

  const handlerClick = (e) => {
    let userId = e.target.value;
    let userData = data.find((e) => e.id == userId);
    setTheModalIsOpen(true);
    setInfoUser(userData);
  };

  return (
    <>
      <main>
        <header>
          <h1>Users</h1>
        </header>
        <article className={styles.listOfNames}>
          <h2 className={styles.title}>Lista de nombres</h2>
          <article className={styles.usersCards}>
            {data.map((user) => (
              <UserCard
                key={user.id}
                name={user.name}
                email={user.email}
                theFunction={handlerClick}
                btnValue={user.id}
              />
            ))}
          </article>
          <Modal theModalIsOpen={theModalIsOpen} info={infoUser} />
        </article>
      </main>
    </>
  );
}
