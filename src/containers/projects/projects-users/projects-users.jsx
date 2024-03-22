import { Suspense } from "react";
import { UserCard } from "../../../components/cards/user-card/user-card";
import getUsers from "../../../service/api/get-users";

export default function ProjectsUsers() {
  let data = getUsers.read();

  return (
    <>
      <section>
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
    </>
  );
}
