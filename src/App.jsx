import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import HomePage from "./pages/HomePage";

import MainLayout from "./layouts/MainLayout";
import SustainableLivingPage from "./pages/SustainableLivingPage";
import OurStoryPage from "./pages/OurStoryPage";
import ContactUsPage from "./pages/ContactUsPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/sustainable-living" element={<SustainableLivingPage />} />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
