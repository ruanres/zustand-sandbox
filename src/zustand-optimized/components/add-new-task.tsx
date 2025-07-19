import type { FC } from "react";
import { useTasksStore } from "../tasks-store";
import { useShallow } from "zustand/react/shallow";

export const AddNewTask: FC<{}> = () => {
  console.log("Rendering AddNewTask");

  const [tasks, setTasks] = useTasksStore(useShallow(state => [state.tasks, state.setTasks]));

  // const { tasks, setTasks } = useTasksStore(
  //   useShallow(state => ({
  //     tasks: state.tasks,
  //     setTasks: state.setTasks,
  //   }))
  // );

  return (
    <div>
      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={() =>
          setTasks(
            tasks.concat({
              id: tasks.length + 1,
              title: "New Task",
              user: "John Doe",
              completed: false,
              description: "New Task",
            })
          )
        }
      >
        Add New Task
      </button>
    </div>
  );
};
