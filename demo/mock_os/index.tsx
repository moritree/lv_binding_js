import Home from "./Home";
import NavigationStack from "./navigation-stack/navigation-stack";
import { Render } from "lvgljs-ui";
import React from "react";

Render.render(<NavigationStack root={(push) => <Home push={push} />} />);
