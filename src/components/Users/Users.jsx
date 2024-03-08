import { Suspense } from "react";
import { fetchData } from "../../service/fetchData";
import { Card } from "../Card/Card";
import "./Users.css";

const userData = fetchData("https://jsonplaceholder.typicode.com/users");

export function Users() {
  const data = userData.read();
  return (
    <section className="users">
      <Suspense>
        {data.map((user) => (
          <Card
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
