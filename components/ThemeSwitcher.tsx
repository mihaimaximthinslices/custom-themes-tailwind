"use client";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function ThemeSwitcher(): JSX.Element {
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    console.log(theme);
  }, []);
  return (
    <section className="flex gap-1 items-center flex-col md:flex-row">
      <h1 className="p-2 text-t-color-1">Hello there 👋, your main theme is</h1>
      <div className="flex flex-col gap-4 items-center">
        <div className="flex gap-2">
          <select
            onChange={(e) => {
              const theme = e.target!.value;
              setTheme(theme);
            }}
            className="bg-bg-color-2 text-t-color-1"
            value={theme}
          >
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="green">Green</option>
          </select>
        </div>
      </div>
    </section>
  );
}
