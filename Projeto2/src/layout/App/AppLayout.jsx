import { ThemeProvider } from "styled-components";
import { useCustomTheme } from "../../contexts";
import { Header, MainTag } from "../../components";
import { GlobalStyles } from "../../themes";
import PropTypes from "prop-types";
import { FormUser } from "../../components/FormUser";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppRoutes } from "../../routes";
export const AppLayout = ({ children }) => {
  const { theme } = useCustomTheme();
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <GlobalStyles />
      <MainTag>
        <AppRoutes></AppRoutes>
      </MainTag>
      {children}
    </ThemeProvider>
  );
};
AppLayout.propTypes = {
  children: PropTypes.node,
};
