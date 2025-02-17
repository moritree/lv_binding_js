import Home from "./Home";
import MessageApp from "./MessageApp";
import { Render } from "lvgljs-ui";
import React, { useState } from "react";

console.log("INDEX TSX");
const apps = new Map<string, () => JSX.Element>([
  ["messages", () => <MessageApp />],
]);

function Root() {
  const [active, setActive] = useState<string | null>(null);

  if (active) return apps.get(active)?.()!;
  return <Home apps={apps} activate={(app) => setActive(app)} />;
}

Render.render(<Root />);
