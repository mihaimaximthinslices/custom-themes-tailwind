import { useEffect, useRef } from "react";

const useCustomThemeProvider = (themeClass: string) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (element) {
      element.classList.add("custom-" + themeClass);

      return () => {
        // Cleanup: remove the class when the component unmounts
        element.classList.remove("custom-" + themeClass);
      };
    }
  }, [themeClass]);

  return ref;
};

const CustomThemeProvider: React.FC<{
  themeClass: string;
  children: React.ReactNode;
}> = ({
  themeClass,
  children,
}: {
  themeClass: string;
  children: React.ReactNode;
}) => {
  const containerRef = useCustomThemeProvider(themeClass);

  return <div ref={containerRef}>{children}</div>;
};
export default CustomThemeProvider;
