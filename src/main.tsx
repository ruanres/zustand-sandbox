import { StrictMode, useState, type FC } from "react";
import { createRoot } from "react-dom/client";

import ZustandApp from "./ZustandApp.tsx";

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
      {app === "zustand" ? <ZustandApp /> : null}
    </div>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
