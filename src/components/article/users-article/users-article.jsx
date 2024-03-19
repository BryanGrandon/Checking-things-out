import { Suspense } from "react";
import { UserCard } from "../../cards/user-card/user-card";
import getUsers from "../../../service/api/get-users";
import "./users-article-styles.css";

export default function UsersArticle() {
  let data = getUsers.read();
  return (
    <section className="users">
      <Suspense>
        {data.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            phone={user.phone}
            website={user.website}
            company={user.company.name}
          />
        ))}
      </Suspense>
    </section>
  );
}
