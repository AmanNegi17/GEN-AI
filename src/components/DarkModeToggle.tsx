"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function DarkModeToggle() {
  // Default light mode
  const [dark, setDark] = useState(false);

  // Apply theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark", !dark);
    localStorage.setItem("theme", !dark ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleDark}
      className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
        dark ? "bg-gray-700" : "bg-yellow-400"
      }`}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          dark ? "translate-x-6" : "translate-x-0"
        } flex items-center justify-center`}
      >
        {dark ? <Sun className="w-3 h-3 text-yellow-400" /> : <Moon className="w-3 h-3 text-gray-700" />}
      </div>
    </button>
  );
}
