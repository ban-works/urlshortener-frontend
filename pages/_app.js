// import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import {createTheme, NextUIProvider } from "@nextui-org/react";



function MyApp({ Component, pageProps }) {
  const lightTheme = createTheme({
    type: 'light',
  })
  
  const darkTheme = createTheme({
    type: 'dark',
  })
  return (
    <ThemeProvider
    defaultTheme="system"
    attribute="class"
    value={{
      light: lightTheme.className,
      dark: darkTheme.className
    }}
    >
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </ThemeProvider>
  );
}

export default MyApp;
