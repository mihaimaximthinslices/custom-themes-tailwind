"use client";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function NextThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return <ThemeProvider>{children}</ThemeProvider>;
}
