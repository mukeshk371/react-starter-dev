import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#563d7c",
    text: "#fff",
    link: "#cbbde2",
    active: "#fff",
    hover: "#fff",
  },
};

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;
