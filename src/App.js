import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Vans from "./Vans";
import VanDetail from "./VanDetail";
import Dashboard from "./Dashboard";
import Income from "./Income";
import Reviews from "./Reviews";
import HostLayout from "./HostLayout";
import Layout from "./Layout";
import HostVans from "./HostVans";
import HostVansDetail from "./HostVansDetail";
import DetailLayout from "./DetailLayout";


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
    <RouterProvider router={router} />
  );
}

export default App;
