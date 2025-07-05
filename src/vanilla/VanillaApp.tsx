import { TasksProvider } from "./tasks-context";
import { TasksHeader } from "./components/tasks-header";
import { TasksBody } from "./components/tasks-body";
import { AddNewTask } from "./components/add-new-task";
import { TasksCount } from "./components/tasks-count";

function AppContent() {
  console.log("Rendering AppContent");

  return (
    <div className="m-5 p-5 flex flex-col gap-2">
      <span>Zustand</span>
      <AddNewTask />
      <TasksCount />
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
