import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootPage from './components/RootPage';
import HomePage from './components/HomePage';
import MedoPage from "./components/companies/MedoPage";
import MalekinusicPage from './components/companies/MalekinusicPage';
import PondtPage from './components/companies/PondtPage';
import KabelOptikaPage from './components/companies/KabelOptikaPage';
import StrojnaMehanikaPage from './components/companies/StrojnaMehanikaPage';
import MGKStrojobravarPage from './components/companies/MGKStrojobravarPage';
import SkelaProjektPage from './components/companies/SkelaProjektPage';
import TBDPage from './components/companies/TBDPage';

const router = createBrowserRouter([
  {
    element: <RootPage />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "medogrupa",
        element: <MedoPage />,
      },
      {
        path: "malekinusic",
        element: <MalekinusicPage />,
      },
      {
        path: "pondt",
        element: <PondtPage />,
      },
      {
        path: "kabel-optika",
        element: <KabelOptikaPage />,
      },
      {
        path: "strojnamehanika",
        element: <StrojnaMehanikaPage />,
      },
      {
        path: "mgk-strojobravar",
        element: <MGKStrojobravarPage />,
      },
      {
        path: "skela-projekt",
        element: <SkelaProjektPage />,
      },
      {
        path: "tbd",
        element: <TBDPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
