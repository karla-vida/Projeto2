import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider, CustomThemeProvider, ProductProvider } from "./contexts";
import { AppLayout } from "./layout";
function App() {
  return (
    <Router>
      <AuthProvider>
        <CustomThemeProvider>
          <ProductProvider>
            <AppLayout></AppLayout>
          </ProductProvider>
        </CustomThemeProvider>
      </AuthProvider>
    </Router>
  );
}
export default App;
