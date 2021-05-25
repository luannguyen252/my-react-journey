import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";

const dynamicRoutes = [
  {
    path: "/",
    exact: true,
    title: () => <h1>Home</h1>,
    span: () => null,
    content: () => <Home />,
  },
  {
    path: "/about/",
    exact: true,
    title: () => <h1>About</h1>,
    span: () => null,
    content: () => <About />,
  },
  {
    path: "/services/",
    exact: true,
    title: () => <h1>Services</h1>,
    span: () => null,
    content: () => <Services />,
  },
  {
    path: "/contact/",
    exact: true,
    title: () => <h1>Contact</h1>,
    span: () => null,
    content: () => <Contact />,
  },
];

export default dynamicRoutes;
