import type { FC } from "react";
import { useTasksStore } from "../tasks-store";
import { cn } from "../../utils";

export const TasksBody: FC = () => {
  console.log("Rendering TasksBody");
  const { currentView } = useTasksStore();

  return (
    <div className="flex gap-1">
      {currentView === "list" && <TasksList />}
      {currentView === "detailed" && <TasksDetailed />}
      {currentView === "condensed" && <TasksCondensed />}
    </div>
  );
};

const TasksList: FC = () => {
  console.log("Rendering TasksList");
  const { tasks } = useTasksStore();

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="border p-2 text-left">Title</th>
          <th className="border p-2 text-left">Description</th>
          <th className="border p-2 text-left">User</th>
          <th className="border p-2 text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => (
          <tr key={task.id}>
            <td className="border p-2">{task.title}</td>
            <td className="border p-2">{task.description}</td>
            <td className="border p-2">{task.user}</td>
            <td className="border p-2">{task.completed ? "Completed" : "Pending"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const TasksCondensed: FC = () => {
  console.log("Rendering TasksCondensed");
  const { tasks } = useTasksStore();

  return (
    <div className="flex flex-col gap-2">
      {tasks.map(task => (
        <div key={task.id} className="flex flex-col gap-2 border p-2 rounded">
          <div className="font-bold">{task.title}</div>
          <div className="text-sm text-gray-600">{task.user}</div>
          <div className="text-sm">{task.completed ? "✓ Done" : "○ Pending"}</div>
        </div>
      ))}
    </div>
  );
};

const TasksDetailed: FC = () => {
  console.log("Rendering TasksDetailed");
  const { tasks } = useTasksStore();

  return (
    <div className="flex flex-col gap-4">
      {tasks.map(task => (
        <div key={task.id} className="flex flex-col gap-3 border p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold">{task.title}</h3>
            <span
              className={cn(
                "px-3 py-1 rounded-full text-sm",
                task.completed ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
              )}
            >
              {task.completed ? "Completed" : "In Progress"}
            </span>
          </div>
          <p className="text-gray-700">{task.description}</p>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span>Assigned to: {task.user}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
