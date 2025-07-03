import { useEffect } from "react";

import { TasksProvider, useTasksContext } from "./tasks-store";
import { tasks } from "../dummy-tasks-data";
import { TasksHeader } from "./components/tasks-header";
import { TasksBody } from "./components/tasks-body";

function AppContent() {
  console.log("Rendering AppContent");
  const { setTasks, setCurrentView, setCurrentUserFilter } = useTasksContext();

  useEffect(() => {
    setTasks(tasks);
    setCurrentView("list");
    setCurrentUserFilter("Adam");
  }, []);

  return (
    <div className="m-5 p-5 flex flex-col gap-2">
      <span>Zustand</span>
      <TasksHeader />
      <TasksBody />
    </div>
  );
}

function App() {
  console.log("Rendering App");
  return (
    <TasksProvider>
      <AppContent />
    </TasksProvider>
  );
}

export default App;
