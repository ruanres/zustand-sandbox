import type { FC } from "react";
import { useTasksStore, type TasksView as TasksViewType } from "../tasks-store";
import { cn } from "../utils";

const allViews: TasksViewType[] = ["list", "detailed", "condensed"];

export const TasksView: FC = () => {
  const { currentView, setCurrentView } = useTasksStore(state => ({
    currentView: state.currentView,
    setCurrentView: state.setCurrentView,
  }));
  return (
    <div className="flex gap-1">
      {allViews.map(view => (
        <button
          onClick={() => setCurrentView(view)}
          className={cn("p-1 bg-gray-200 rounded-md", { "bg-gray-300": view === currentView })}
          disabled={view === currentView}
        >
          {view}
        </button>
      ))}
    </div>
  );
};
