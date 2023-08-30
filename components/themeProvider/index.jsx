"use client"
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
// import { ThemeProviderProps } from "../../node_modules/next-themes/dist/";

export function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}