import { create } from "zustand";

export type Task = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  user: string;
};

export type TasksView = "list" | "detailed" | "condensed";

export type TasksState = {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  currentView: TasksView;
  setCurrentView: (tasksView: TasksView) => void;
  currentUserFilter: string;
  setCurrentUserFilter: (newUserFilter: string) => void;
};

export const useTasksStore = create<TasksState>(set => ({
  tasks: [],
  setTasks: (tasks: Task[]) => set({ tasks }),
  currentView: "list",
  setCurrentView: (newView: TasksView) => set({ currentView: newView }),
  currentUserFilter: "",
  setCurrentUserFilter: (newUserFilter: string) => set({ currentUserFilter: newUserFilter }),
}));

export const allViews: TasksView[] = ["list", "detailed", "condensed"];
