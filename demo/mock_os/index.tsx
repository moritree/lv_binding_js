import Home from "./Home";
import MessageApp from "./MessageApp";
import { Render } from "lvgljs-ui";
import React, { useState } from "react";

console.log("INDEX TSX");
const apps = new Map<string, () => JSX.Element | null>([
  ["messages", () => <MessageApp />],
]);

function App() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      {active ? (
        apps.get(active)?.()
      ) : (
        <Home apps={apps} activate={(app) => setActive(app)} />
      )}
    </>
  );
}

Render.render(<App />);
