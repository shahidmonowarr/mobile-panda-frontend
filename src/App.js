import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BackToTop from "./components/shares/BackToTop/BackToTop";
import AllServices from "./pages/AllServices/AllServices/AllServices";
import ServiceDetails from "./pages/AllServices/ServiceDetails/ServiceDetails";
import Login from "./pages/Authentication/Login/Login";
import Register from "./pages/Authentication/Register/Register";
import RequireAuth from "./pages/Authentication/RequireAuth/RequireAuth";
import Contact from "./pages/Contact/Contact";
import AllOrders from "./pages/Dashboard/AllOrders/AllOrders";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import Profile from "./pages/Dashboard/Dashboard/Profile";
import MyOrders from "./pages/Dashboard/MyOrders/MyOrders";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BackToTop />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          {/* <Route path="allOrders" element={<AllOrders />} /> */}
          <Route path="services" element={<AllServices />} />
          <Route
            path="services/:serviceId"
            element={
              <RequireAuth>
                <ServiceDetails />
              </RequireAuth>
            }
          />
          <Route
            path="dashboard"
            element={
              <RequireAuth>
                <Dashboard/>
              </RequireAuth>
            }
          >
            <Route index element={<Profile />} />
            <Route path="allOrders" element={<AllOrders />} />
            <Route path="myOrders" element={<MyOrders />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
