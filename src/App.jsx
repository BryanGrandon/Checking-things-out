import { UserCard } from "./components/Card/Card";

function App() {
  return (
    <>
      <h1>JSON Placeholder</h1>

      <section>
        <UserCard
          name={"Leanne Graham"}
          company={"Romaguera-Crona"}
          email={"Sincere@april.biz"}
          phone={"1-770-736-8031 x56442"}
          website={"hildegard.org"}
        />
      </section>
    </>
  );
}

export default App;
