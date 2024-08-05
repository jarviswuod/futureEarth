import "bootstrap/dist/css/bootstrap.min.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";
import Home from "./components/home/Home";
import ExistingRooms from "./components/room/ExistingRooms";
import EditRoom from "./components/room/EditRoom";
import AddRoom from "./components/room/AddRoom";
import RoomListing from "./components/room/RoomListing";
import NotFoundPage from "./components/common/NotFoundPage";
import Admin from "./components/admin/Admin";
import CheckOut from "./components/bookings/CheckOut";
import BookingSuccess from "./components/bookings/BookingSuccess";
import Bookings from "./components/bookings/Bookings";
import FindBooking from "./components/bookings/FindBooking";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import Registration from "./components/auth/Registration";
import Profile from "./components/auth/Profile";
import Footer from "./components/common/Footer";
import RequiredAuth from "./components/auth/RequiredAuth";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="*" element={<NotFoundPage />} />
        <Route index element={<Home />} />
        <Route path="/existing-rooms" element={<ExistingRooms />} />
        <Route path="/edit-room/:id" element={<EditRoom />} />
        <Route path="/add-room" element={<AddRoom />} />
        <Route path="/browse-all-rooms" element={<RoomListing />} />
        <Route path="/booking-success" element={<BookingSuccess />} />
        <Route path="/existing-bookings" element={<Bookings />} />
        <Route path="/find-booking" element={<FindBooking />} />
        <Route path="/admin" element={<Admin />} />

        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />

        <Route
          path="/book-room/:id"
          element={
            <RequiredAuth>
              <CheckOut />
            </RequiredAuth>
          }
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
