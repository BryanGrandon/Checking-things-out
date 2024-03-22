import TaskForm from "../../../components/form/task-form/task-form";
import TaskList from "../../../components/lists/task-list/task-list";
import { TaskContextProvider } from "../../../context/task-context";

export default function ProjectsTodos() {
  return (
    <>
      <section>
        <TaskContextProvider>
          <TaskForm />
          <TaskList />
        </TaskContextProvider>
      </section>
    </>
  );
}
