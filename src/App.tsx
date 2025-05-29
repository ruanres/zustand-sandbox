import "./App.css";
import { StoreDemo1 } from "./StoreDemo1";
import { useTasksStore } from "./tasks-store";

function App() {
  const { setTasks, setTasksView, setCurrentUserFilter } = useTasksStore();
  return (
    <div className="m-5 p-5 flex flex-col gap-2">
      <StoreDemo1 />
      <StoreDemo1 />
    </div>
  );
}

export default App;
