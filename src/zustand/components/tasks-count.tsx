import type { FC } from "react";
import { useTasksStore } from "../tasks-store";

export const TasksCount: FC = () => {
  console.log("Rendering TasksCount");

  const { tasks } = useTasksStore();

  return <div className="text-lg text-gray-600 font-medium">Total Tasks: {tasks.length}</div>;
};
