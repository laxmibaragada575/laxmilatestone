import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import HomePage from "../src/pages/HomePage/HomePage.jsx";
import AboutPage from "../src/pages/AboutPage/AboutPage.jsx";
import ProductPage from "../src/pages/ProductPage/ProductPage.jsx";
import CareersPage from "../src/pages/CareersPage/CareersPage.jsx";
import ContactUs from "../src/pages/ContactUs/ContactUs.jsx";
import CareerDetails from "../src/pages/CareerDetails/CareerDetails.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<HomePage />} />
      <Route path="aboutus" element={<AboutPage />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="product" element={<ProductPage />} />
      <Route path="careers" element={<CareersPage />} />
      <Route path="careers/:id" element={<CareerDetails />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  </React.StrictMode>
);
