import TaskForm from "../../../components/form/task-form/task-form";
import TaskList from "../../../components/lists/task-list/task-list";
import { TaskContextProvider } from "../../../context/task-context";
import "./home-todos-styles.css";

export default function HomeTodos() {
  return (
    <>
      <section className="home-todos">
        <TaskContextProvider>
          <TaskForm />
          <TaskList />
        </TaskContextProvider>
      </section>
    </>
  );
}
