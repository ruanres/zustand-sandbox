import type { FC } from "react";
import { allViews, useTasksStore } from "../tasks-store";
import { cn } from "../../utils";

export const TasksHeader: FC = () => {
  const { currentView, setCurrentView } = useTasksStore();

  return (
    <div className="flex gap-1">
      {allViews.map(view => (
        <button
          onClick={() => setCurrentView(view)}
          className={cn("p-1 bg-gray-200 rounded-md", { "bg-gray-400": view === currentView })}
          disabled={view === currentView}
        >
          {view}
        </button>
      ))}
    </div>
  );
};
