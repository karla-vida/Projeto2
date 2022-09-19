import { FormUser } from "./components/FormUser";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Devices, Profile } from "./pages";
import { AuthProvider, CustomThemeProvider } from "./contexts";
import { GlobalStyles } from "./themes";
import { AppLayout } from "./layout";

function App() {
  return (
    <Router>
      <AuthProvider>
      <CustomThemeProvider>
       
        <AppLayout>

        </AppLayout>
       
      </CustomThemeProvider>
       </AuthProvider>
    </Router>
    /*
    <Router>
      <div>
        <Header></Header>
              <main>
                <Routes>
                  <Route path="/" element={<FormUser />} />
                  <Route path="/Home" element={<Home />} />
                  <Route path="/Devices" element={<Devices />} />
                  <Route path="/Profile" element={<Profile />} />
                </Routes>
              </main>
  
      </div>
    </Router>
   */
  );
}
export default App;
