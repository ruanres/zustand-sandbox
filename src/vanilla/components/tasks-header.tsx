import type { FC } from "react";
import { allViews, useTasksContext } from "../tasks-store";
import { cn } from "../../utils";

export const TasksHeader: FC = () => {
  console.log("Rendering TasksHeader");
  const { currentView, setCurrentView } = useTasksContext();

  return (
    <div className="flex gap-1">
      {allViews.map(view => (
        <button
          key={view}
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
