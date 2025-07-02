import { useEffect } from "react";
import "./App.css";

import { useTasksStore } from "./tasks-store";
import { tasks } from "./dummy-tasks-data";
import { TasksView } from "./components/tasks-view";

function App() {
  // const { setTasks, setCurrentView, setCurrentUserFilter } = useTasksStore();

  // useEffect(() => {
  //   setTasks(tasks);
  //   setCurrentView("list");
  //   setCurrentUserFilter("Adam");
  // }, []);

  return (
    <div className="m-5 p-5 flex flex-col gap-2">
      <TasksView />
    </div>
  );
}

export default App;
