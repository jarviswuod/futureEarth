import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import HomePage from "./pages/HomePage";
import SustainableLivingPage from "./pages/SustainableLivingPage";
import OurStoryPage from "./pages/OurStoryPage";
import ContactUsPage from "./pages/ContactUsPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <HomePage /> */}
      {/* <SustainableLivingPage /> */}
      <OurStoryPage />
      {/* <ContactUsPage /> */}
    </>
  );
}

export default App;
