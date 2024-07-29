import { Link } from "react-router-dom";

import reactLogo from "../assets/react.svg";
import twLogo from "../assets/tailwind.svg";
import radixLogo from "../assets/radix.svg";

export function Home() {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center gap-32 p-20">
      <div className="flex items-center justify-center gap-32">
        <a href="https://vitejs.dev" target="_blank">
          <img
            src={"vite.svg"}
            className="h-[100px] transition-[filter] duration-300 will-change-[filter] hover:drop-shadow-[0_0_30px_var(--kf-color-secondary-six-400)]"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="h-[100px] animate-[spin_20s_linear_infinite] transition-[filter] will-change-[filter] hover:drop-shadow-[0_0_30px_var(--kf-color-secondary-eight-400)]"
            alt="React logo"
          />
        </a>
        <a href="https://tailwindcss.com/" target="_blank">
          <img
            src={twLogo}
            className="h-[80px] animate-[wiggle_1s_linear_infinite] text-gray-900 transition-[filter] will-change-[filter] hover:drop-shadow-[0_0_30px_var(--kf-color-secondary-eight-400)]"
            alt="TW logo"
          />
        </a>
        <a href="https://www.radix-ui.com/" target="_blank">
          <img
            src={radixLogo}
            className="h-[80px] animate-[bounce_1s_linear_infinite] text-gray-900 transition-[filter] will-change-[filter] hover:drop-shadow-[0_0_30px_var(--kf-color-secondary-eight-400)]"
            alt="TW logo"
          />
        </a>
      </div>
      <div className="flex items-center justify-center gap-32"></div>
      <a href="https://ui.shadcn.com/" target="_blank">
        <h1 className="mega-600 animate-[ping_3s_linear_infinite] tracking-small text-gray-999 transition-[filter] will-change-[filter] hover:drop-shadow-[0_0_20px_var(--kf-color-secondary-three-400)]">
          shadcn/UI
        </h1>
      </a>
      <div className="mx-20 my-20 flex flex-col items-center gap-12 rounded-10 bg-primary-100 px-20 py-20 text-20 font-medium tracking-h2 text-secondary-eight-500">
        <button className="h3 min-h-48 rounded-8 border-2 border-solid border-bg-gray bg-primary-500 px-32 text-white hover:bg-primary-600">
          <Link to="./accordion">Get started</Link>
        </button>
      </div>
    </div>
  );
}
