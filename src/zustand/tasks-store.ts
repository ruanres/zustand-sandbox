import { create } from "zustand";
import type { Task } from "../utils";
import { tasks } from "../dummy-tasks-data";

export type TasksView = "list" | "detailed" | "condensed";

export type TasksState = {
  tasks: Task[];
  setTasks: (tasks: Task[] | ((tasks: Task[]) => Task[])) => void;
  currentView: TasksView;
  setCurrentView: (tasksView: TasksView) => void;
  currentFilter: string;
  setCurrentFilter: (newFilter: string) => void;
};

export const useTasksStore = create<TasksState>(set => ({
  tasks,
  setTasks: (arg: Task[] | ((tasks: Task[]) => Task[])) => {
    set(state => {
      return {
        tasks: typeof arg === "function" ? arg(state.tasks) : arg,
      };
    });
  },
  currentView: "list",
  setCurrentView: (newView: TasksView) => set({ currentView: newView }),
  currentFilter: "",
  setCurrentFilter: (newFilter: string) => set({ currentFilter: newFilter }),
}));

export const allViews: TasksView[] = ["list", "detailed", "condensed"];
