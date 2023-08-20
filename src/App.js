import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";
import Dashboard from "./pages/Dashboard";
import Income from "./pages/Income";
import Reviews from "./pages/Reviews";
import HostLayout from "./layout/HostLayout";
import Layout from "./layout/Layout";
import HostVans from "./pages/HostVans";
import HostVansDetail from "./pages/HostVansDetail";
import DetailLayout from "./layout/DetailLayout";

import NamesProvider from "./context/NamesProvider";


const router = createBrowserRouter(
    createRoutesFromElements(
            <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="vans" element={<Vans />} />
                    <Route path="vans/:id" element={<VanDetail />} />

                    <Route path="host" element={<HostLayout />} >
                        <Route index element={<Dashboard />} />
                        <Route path="income" element={<Income />} />
                        <Route path="reviews" element={<Reviews />} />
                        <Route path="vans" element={<HostVans />} />

                              <Route path="vans/:id" element={<DetailLayout/>}>
                                <Route index element={<HostVansDetail />} />
                                <Route path="pricing" element={<h1>Pricing</h1>} />
                                <Route path="photos" element={<h1>Photos</h1>} />
                              </Route>
                    </Route>

                    <Route path="*" element={<h1>404 Page</h1>} />
            </Route>
    )
  );


function App() {
  return (
    <NamesProvider>
      <RouterProvider router={router} />
    </NamesProvider>
  );
}

export default App;
