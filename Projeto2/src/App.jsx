import { FormUser } from "./components/FormUser";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Devices, Profile } from "./pages";
function App() {
  return (
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
  );
}
export default App;
