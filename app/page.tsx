import Image from "next/image";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { useTheme } from "next-themes";
import CustomThemeProvider from "@/hooks/CustomThemeProvider";
import ThemeShowcase from "@/components/ThemeShowcase";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-4 items-center p-24 bg-bg-color-2">
      <section className="flex flex-col items-center justify-center">
        <ThemeSwitcher />
      </section>
      <ThemeShowcase />
    </main>
  );
}
