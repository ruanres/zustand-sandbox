import { useState, useEffect, type FC } from "react";
import { createRoot } from "react-dom/client";

import ZustandApp from "./zustand/ZustandApp";
import ZustandOptimizedApp from "./zustand-optimized/ZustandApp";
import VanillaApp from "./vanilla/VanillaApp";

import "./App.css";
import { cn } from "./utils";

const LOCAL_STORAGE_KEY = "zustand-sandbox-current-app";

type AppType = "zustand" | "vanilla" | "zustand-optimized";

const Root: FC = () => {
  const [app, setApp] = useState<AppType>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved === "vanilla" || saved === "zustand" || saved === "zustand-optimized") {
        return saved as AppType;
      }
    } catch (err) {}
    return "vanilla";
  });

  // Sync app type to local storage whenever app state changes
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, app);
    } catch (error) {}
  }, [app]);

  return (
    <div className="p-2">
      <div className="flex gap-2">
        <button
          className={cn("border p-2 rounded text-gray-700", app === "vanilla" && "bg-blue-500 text-white")}
          onClick={() => setApp("vanilla")}
        >
          Vanilla
        </button>
        <button
          className={cn("border p-2 rounded text-gray-700", app === "zustand" && "bg-blue-500 text-white")}
          onClick={() => setApp("zustand")}
        >
          Zustand
        </button>
        <button
          className={cn("border p-2 rounded text-gray-700", app === "zustand-optimized" && "bg-blue-500 text-white")}
          onClick={() => setApp("zustand-optimized")}
        >
          Zustand Optimized
        </button>
      </div>
      {app === "vanilla" && <VanillaApp />}
      {app === "zustand" && <ZustandApp />}
      {app === "zustand-optimized" && <ZustandOptimizedApp />}
    </div>
  );
};

createRoot(document.getElementById("root")!).render(<Root />);
