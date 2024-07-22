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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/existing-rooms" element={<ExistingRooms />} />
        <Route path="/edit-room/:id" element={<EditRoom />} />
        <Route path="/add-room" element={<AddRoom />} />
        <Route path="/book-room/:id" element={<CheckOut />} />
        <Route path="/browse-all-rooms" element={<RoomListing />} />
        <Route path="/booking-success" element={<BookingSuccess />} />

        <Route path="/admin" element={<Admin />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
