import type { FC } from "react";
import { useTasksContext } from "../tasks-context";

export const TasksCount: FC = () => {
  console.log("Rendering TasksCount");

  const { tasks } = useTasksContext();

  return <div className="text-lg text-gray-600 font-medium">Total Tasks: {tasks.length}</div>;
};
