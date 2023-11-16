import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Landing from "./components/Landing";
import Login from "./components/LogIn";
import Register from "./components/Register";
import PrivateRoute from "./components/privateRoutes"
import RestaurantManagementPage from "./components/restaurantLandingPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          {/* Render the Header for all routes except Landing, Login, and Register */}
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* Protected Routes */}
            <Route
              element={<PrivateRoute/>}
            >
              <Route path="/restaurantManagementPage" element={<RestaurantManagementPage />} />
            </Route>
           
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}
export default App;
