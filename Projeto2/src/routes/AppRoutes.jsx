import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Profile, Home, Devices, Login, ProfileEdit, Details } from "../pages";
import { FormUser } from "../components";
import { PrivateRoute } from "./PrivateRoute";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<FormUser />} />
      <Route path="/Login" element={<Login />} />
      <Route
        path="/Home"
        element={
          <PrivateRoute>
            {" "}
            <Home />{" "}
          </PrivateRoute>
        }
      />
      <Route path="/Devices" element={<Devices />} />
      <Route
        path="/Profile"
        element={
          <PrivateRoute>
            {" "}
            <Profile />{" "}
          </PrivateRoute>
        }
      />
      <Route
        path="/ProfileEdit"
        element={
          <PrivateRoute>
            {" "}
            <ProfileEdit />{" "}
          </PrivateRoute>
        }
      />
      <Route
        path="/Details"
        element={
          <PrivateRoute>
            {" "}
            <Details />{" "}
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
