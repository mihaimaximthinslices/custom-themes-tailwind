"use client";
import CustomThemeProvider from "@/hooks/CustomThemeProvider";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeShowcase() {
  const [selectedTheme, setSelectedTheme] = useState<string>("light");

  return (
    <CustomThemeProvider themeClass={selectedTheme}>
      <section className="p-6 bg-bg-color-2 flex flex-col gap-4 rounded-md">
        <div className="flex gap-2">
          <h1 className="text-t-color-2">
            You can have multiple themes for different components
          </h1>
          <select
            onChange={(e) => {
              const theme = e.target!.value;
              setSelectedTheme(theme);
            }}
            className="bg-bg-color-1 text-t-color-2"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="green">Green</option>
          </select>
        </div>
        <div className="bg-ic-color-3 p-4 rounded-md border border-bs-color-3">
          <p className="text-t-color-2 ">A themed paragraph</p>
        </div>
      </section>
    </CustomThemeProvider>
  );
}
