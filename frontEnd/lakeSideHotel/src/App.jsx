import ExistingRooms from "./components/room/ExistingRooms";
import { BrowserRouter as Route, Router, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import EditRoom from "./components/room/EditRoom";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit-room/:id" element={<EditRoom />} />
          <Route path="/existing-rooms" element={<ExistingRooms />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
