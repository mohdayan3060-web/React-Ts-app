import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];
import "./index.css";
import App from "./App";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App tasks={DATA} />

  </StrictMode>,

  
)
