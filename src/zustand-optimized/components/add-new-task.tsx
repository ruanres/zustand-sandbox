import { useEffect, type FC } from "react";
import { useTasksStore } from "../tasks-store";
import { useShallow } from "zustand/react/shallow";

export const AddNewTask: FC<{}> = () => {
  console.log("Rendering AddNewTask");

  const [tasks, setTasks, clearEvenTasks] = useTasksStore(
    useShallow(state => [state.tasks, state.setTasks, state.clearEvenTasks])
  );

  useEffect(() => {
    setTimeout(() => {
      console.log("Can't call a hook here");
      const tasks = useTasksStore.getState().tasks;
      console.log({ tasks });
    }, 1000);
  }, []);

  // const { tasks, setTasks } = useTasksStore(
  //   useShallow(state => ({
  //     tasks: state.tasks,
  //     setTasks: state.setTasks,
  //   }))
  // );

  return (
    <div>
      <button className="bg-blue-500 text-white p-2 rounded-md" onClick={clearEvenTasks}>
        Add New Task
      </button>
    </div>
  );
};
