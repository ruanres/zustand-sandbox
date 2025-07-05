import { StrictMode, useState, type FC } from "react";
import { createRoot } from "react-dom/client";

import ZustandApp from "./zustand/ZustandApp";
import VanillaApp from "./vanilla/VanillaApp";

import "./App.css";
import { cn } from "./utils";

const Root: FC = () => {
  const [app, setApp] = useState<"zustand" | "vanilla" | "zustand-optimized">("zustand");

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
      {app === "zustand" ? <ZustandApp /> : <VanillaApp />}
    </div>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
