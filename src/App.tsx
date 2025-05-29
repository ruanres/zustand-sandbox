import { useEffect } from "react";
import "./App.css";

import { useTasksStore } from "./tasks-store";
import { tasks } from "./dummy-tasks-data";

function App() {
  const { setTasks, setTasksView, setCurrentUserFilter } = useTasksStore();

  useEffect(() => {
    setTasks(tasks);
    setTasksView("list");
    setCurrentUserFilter("Adam");
  }, []);

  return <div className="m-5 p-5 flex flex-col gap-2"></div>;
}

export default App;
