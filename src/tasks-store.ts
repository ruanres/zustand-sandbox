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
  tasksView: TasksView;
  setTasksView: (tasksView: TasksView) => void;
  currentUserFilter: string;
  setCurrentUserFilter: (newUserFilter: string) => void;
};

export const useTasksStore = create<TasksState>((set) => ({
  tasks: [],
  setTasks: (tasks: Task[]) => set({ tasks }),
  tasksView: "list",
  setTasksView: (tasksView: TasksView) => set({ tasksView }),
  currentUserFilter: "",
  setCurrentUserFilter: (newUserFilter: string) => set({ currentUserFilter: newUserFilter }),
}));
