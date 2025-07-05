import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Task } from "../utils";
import { tasks as dummyTasks } from "../dummy-tasks-data";

export type TasksView = "list" | "detailed" | "condensed";

export type TasksState = {
  tasks: Task[];
  setTasks: (tasks: Task[] | ((tasks: Task[]) => Task[])) => void;
  currentView: TasksView;
  setCurrentView: (tasksView: TasksView) => void;
  currentUserFilter: string;
  setCurrentUserFilter: (newUserFilter: string) => void;
};

const TasksContext = createContext<TasksState>(null as any);

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  console.log("Rendering TasksProvider");

  const [tasks, setTasks] = useState<Task[]>(dummyTasks);
  const [currentView, setCurrentView] = useState<TasksView>("list");
  const [currentUserFilter, setCurrentUserFilter] = useState<string>("Adam");

  const value: TasksState = {
    tasks,
    setTasks,
    currentView,
    setCurrentView,
    currentUserFilter,
    setCurrentUserFilter,
  };

  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>;
};

export const useTasksContext = () => {
  const context = useContext(TasksContext);
  if (context === undefined) {
    throw new Error("useTasksContext must be used within a TasksProvider");
  }
  return context;
};

export const allViews: TasksView[] = ["list", "detailed", "condensed"];
