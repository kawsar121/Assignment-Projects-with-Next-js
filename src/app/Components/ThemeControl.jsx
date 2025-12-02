"use client";
import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react"; 
const ThemeControl = () => {
  const themes = ["light", "dark"];
  const [theme, setTheme] = useState("light");

  useEffect(() => {
  if(theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [theme]);

  const toggleTheme = () => {
    const nextIndex = (themes.indexOf(theme) + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };
  return (
    <div>
      <button
        onClick={toggleTheme}
        className="p-3 rounded-full shadow-md bg-gray-200  transition hover:scale-110"
      >
        {theme === "light" && <Sun size={10} className="text-yellow-700" />}
        {theme === "dark" && <Moon size={10} className="text-gray-700" />}
      </button>
    </div>
  );
};

export default ThemeControl;
