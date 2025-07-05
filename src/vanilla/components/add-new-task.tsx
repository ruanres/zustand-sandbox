import type { FC } from "react";
import { useTasksContext } from "../tasks-context";

export const AddNewTask: FC<{}> = () => {
  console.log("Rendering AddNewTask");

  const { setTasks } = useTasksContext();

  return (
    <div>
      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={() =>
          setTasks(prevTasks =>
            prevTasks.concat({
              id: prevTasks.length + 1,
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
