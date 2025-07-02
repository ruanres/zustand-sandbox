import { create } from "zustand";
import type { Task } from "../utils";

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
