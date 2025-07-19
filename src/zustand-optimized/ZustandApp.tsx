import { TasksHeader } from "./components/tasks-header";
import { TasksBody } from "./components/tasks-body";
import { AddNewTask } from "./components/add-new-task";
import { TasksCount } from "./components/tasks-count";
import { Filter } from "./components/filter";

function App() {
  console.log("Rendering App");

  return (
    <div className="m-5 p-5 flex flex-col gap-2">
      <ZustandOptimizedLabel />
      <AddNewTask />
      <TasksCount />
      <TasksHeader />
      <Filter />
      <TasksBody />
    </div>
  );
}

const ZustandOptimizedLabel = () => {
  console.log("Rendering Zustand Optimized Label");
  return <span>Zustand Optimized</span>;
};

export default App;
