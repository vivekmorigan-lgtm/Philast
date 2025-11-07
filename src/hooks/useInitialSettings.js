import { useEffect } from "react";

export function useInitialSettings(darkMode) {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.style.background = darkMode ? "#060712" : "#0b1020";
    document.body.style.color = "#f6f7eb";
  }, [darkMode]);
}
