import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import BackToTop from "./components/shares/BackToTop/BackToTop";
import AllServices from "./pages/AllServices/AllServices/AllServices";
import ServiceDetails from "./pages/AllServices/ServiceDetails/ServiceDetails";
import Login from "./pages/Authentication/Login/Login";
import Register from "./pages/Authentication/Register/Register";
import RequireAdmin from "./pages/Authentication/RequireAdmin/RequireAdmin";
import RequireAuth from "./pages/Authentication/RequireAuth/RequireAuth";
import Contact from "./pages/Contact/Contact";
import AddReview from "./pages/Dashboard/AddReview/AddReview";
import AllOrders from "./pages/Dashboard/AllOrders/AllOrders";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import Profile from "./pages/Dashboard/Dashboard/Profile";
import AddService from "./pages/Dashboard/ManageServices/AddService/AddService";
import ManageService from "./pages/Dashboard/ManageServices/ManageService";
import ServiceList from "./pages/Dashboard/ManageServices/ServiceList/ServiceList";
import UpdateService from "./pages/Dashboard/ManageServices/UpdateService/UpdateService";
import MyOrders from "./pages/Dashboard/MyOrders/MyOrders";
import Users from "./pages/Dashboard/Users/Users";
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
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route index element={<Profile />} />
            <Route
              path="allOrders"
              element={
                <RequireAdmin>
                  <AllOrders />
                </RequireAdmin>
              }
            />
            <Route path="myOrders" element={<MyOrders />} />
            <Route path="addReview" element={<AddReview />} />
            <Route path="manageService" element={<ManageService />}>
              <Route path="" element={<ServiceList />}></Route>
              <Route path="add" element={<AddService />}></Route>
              <Route path="update/:id" element={<UpdateService />}></Route>
            </Route>
            <Route
              path="users"
              element={
                <RequireAdmin>
                  <Users />
                </RequireAdmin>
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
