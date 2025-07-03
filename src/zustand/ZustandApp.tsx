import { useEffect } from "react";

import { useTasksStore } from "./tasks-store";
import { tasks } from "../dummy-tasks-data";
import { TasksHeader } from "./components/tasks-header";
import { TasksBody } from "./components/tasks-body";
import { AddNewTask } from "./components/add-new-task";

function App() {
  console.log("Rendering App");

  const { setTasks, setCurrentView, setCurrentUserFilter } = useTasksStore();

  useEffect(() => {
    setTasks(tasks);
    setCurrentView("list");
    setCurrentUserFilter("Adam");
  }, []);

  return (
    <div className="m-5 p-5 flex flex-col gap-2">
      <span>Zustand</span>
      <AddNewTask />
      <TasksHeader />
      <TasksBody />
    </div>
  );
}

export default App;
