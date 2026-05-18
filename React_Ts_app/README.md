Goal (To-DO-APPLICATION)
      read a list of tasks.
      add a task using the mouse or keyboard.
      mark any task as completed, using the mouse or keyboard.
      delete any task, using the mouse or keyboard.
      edit any task, using the mouse or keyboard.
      view a specific subset of tasks: All tasks, only the active task, or only the completed tasks.

# Fixes (May 19, 2026)
Problem
      App import was broken: `./components/Form.` (invalid path).
      `main.tsx` passed `task={DATA}` but `App` read `props.tasks`, so the list was empty.
      `Form.jsx` imported `node:stream` which breaks in the browser.
      `FilterButton` rendered 3 identical buttons with hard-coded text/pressed state.

How it was fixed
      Fixed the `Form` import path in `src/App.tsx`.
      Standardized on a `tasks` prop: `main.tsx` now renders `<App tasks={DATA} />` and `App.tsx` types it.
      Removed the Node-only `node:stream` import from `src/components/Form.jsx`.
      Updated `FilterButton` to accept `name` and `isPressed` props, and `App.tsx` now renders the 3 filter buttons from an array.

# Today I learned (Components)
      A component is a reusable UI block (function that returns JSX).
      Keep one component for one job (single responsibility).
      Name components with Capital letters (example: `FilterButton`, not `filterbutton`).
      Pass data using props, and keep prop names consistent everywhere.
      Use `key` when rendering lists with `.map()` to avoid UI bugs.
      Don’t import Node-only modules (like `node:*`) in React/Vite components.
      Keep components small and reuse them instead of repeating JSX.

# These command help to delate things from terminal becouse vit give lot's code that we would not use in our project
# Move into the src directory
cd src
# Delete the App.css file and the React logo provided by Vite
rm App.css assets/react.svg
# Empty the contents of App.jsx and index.css
echo -n > App.jsx && echo -n > index.css
# Move back up to the root of the project
cd ..      
