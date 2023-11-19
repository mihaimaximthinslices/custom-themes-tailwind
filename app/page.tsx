import ThemeSwitcher from "@/components/ThemeSwitcher";
import ThemeShowcase from "@/components/ThemeShowcase";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-4 items-center p-24 bg-bg-color-2">
      <section className="flex flex-col items-center justify-center">
        <ThemeSwitcher />
      </section>
      <section className="flex flex-col md:flex-row gap-4 bg-ic-color-1 p-4 rounded-md">
        <ThemeShowcase initialTheme={"dark"} />
        <ThemeShowcase initialTheme={"green"} />
      </section>
    </main>
  );
}
