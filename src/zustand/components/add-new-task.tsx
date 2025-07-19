import type { FC } from "react";
import { useTasksStore } from "../tasks-store";

export const AddNewTask: FC<{}> = () => {
  console.log("Rendering AddNewTask");

  const { setTasks } = useTasksStore();

  return (
    <div>
      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={() =>
          setTasks(tasks =>
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
