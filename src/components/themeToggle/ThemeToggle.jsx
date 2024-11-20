"use client";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa"; // Import icons from React Icons
import styles from "./themeToggle.module.css";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggle}>
      {theme === "dark" ? (
        <FaSun className={styles.icon} title="Switch to light mode" />
      ) : (
        <FaMoon className={styles.icon} title="Switch to dark mode" />
      )}
    </div>
  );
};

export default ThemeToggle;
