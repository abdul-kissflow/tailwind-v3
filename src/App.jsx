import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Theme } from "./Theme.jsx";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Theme />
      <div className="flex items-center justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="small-600 text-gray-999">Vite + React</h1>
      <div className="mx-10 my-10 flex flex-col items-center gap-12 bg-primary-100 px-20 py-20 text-20 font-medium tracking-h2 text-secondary-eight-500">
        <button
          className="rounded-6 border-2 border-solid border-bg-gray bg-primary-500 px-10 text-white hover:bg-primary-600"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
