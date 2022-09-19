import { ThemeProvider } from "styled-components";
import { useCustomTheme } from "../../contexts";
import { Header, MainTag } from "../../components";
import { GlobalStyles } from "../../themes";
import { Profile, Home, Devices, Login } from "../../pages";
import PropTypes from "prop-types";
import { FormUser } from "../../components/FormUser";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export const AppLayout = ({ children }) => {
  const { theme } = useCustomTheme();
  return (
    <ThemeProvider theme={theme}>
      
      <Header></Header>
      <GlobalStyles/>
      <MainTag>
        <Routes>
          <Route path="/" element={<FormUser />} />
          <Route path="/Login" element={<Login />}/>
          <Route path="/Home" element={<Home />} />
          <Route path="/Devices" element={<Devices />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </MainTag>
      {children}
    </ThemeProvider>
  );
};
AppLayout.propTypes = {
  children: PropTypes.node,
};
