import ThemeSwitcher from "@/components/ThemeSwitcher";
import ThemeShowcase from "@/components/ThemeShowcase";
import { Box, Heading, Text } from "@radix-ui/themes";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-4 items-center p-24 bg-bg-color-2">
      <section className="flex flex-col items-center justify-center">
        <ThemeSwitcher />
      </section>
      <section className="flex flex-col md:flex-row gap-4 bg-ic-color-1 p-4 rounded-md">
        <ThemeShowcase initialTheme={"dark"} />
        <ThemeShowcase initialTheme={"green"} />
        <Box>
          <Text>Wadap</Text>
        </Box>
        <Heading>The quick brown fox jumps over the lazy dog</Heading>
      </section>
    </main>
  );
}
