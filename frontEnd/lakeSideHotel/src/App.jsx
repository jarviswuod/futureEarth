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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/existing-rooms" element={<ExistingRooms />} />
        <Route path="/edit-room/:id" element={<EditRoom />} />
        <Route path="/add-room" element={<AddRoom />} />
        {/* <Route path="*" element={<Home />} /> */}
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
