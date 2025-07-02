import { StrictMode, useState, type FC } from "react";
import { createRoot } from "react-dom/client";

import ZustandApp from "./zustand/ZustandApp";
import VanillaApp from "./vanilla/VanillaApp";

import "./App.css";

const Root: FC = () => {
  const [app, setApp] = useState<"zustand" | "vanilla">("zustand");

  return (
    <div className="p-2">
      <div className="flex gap-2">
        <button className="border p-2 rounded text-gray-700" onClick={() => setApp("zustand")}>
          Zustand
        </button>
        <button className="border p-2 rounded text-gray-700" onClick={() => setApp("vanilla")}>
          Vanilla
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
