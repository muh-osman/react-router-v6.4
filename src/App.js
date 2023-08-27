// React Router
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, {loader as vansLoader} from "./pages/Vans";
import VanDetail from "./pages/VanDetail";
import Dashboard from "./pages/Dashboard";
import Income from "./pages/Income";
import Reviews from "./pages/Reviews";
import HostLayout from "./layout/HostLayout";
import Layout from "./layout/Layout";
import HostVans from "./pages/HostVans";
import HostVanDetail from "./pages/HostVanDetail";
import DetailLayout from "./layout/DetailLayout";
import HostVanPhotos from "./pages/HostVanPhotos";
import HostVanPricing from "./pages/HostVanPricing";
import NotFound from "./pages/NotFound";
// 
import NamesProvider from "./context/NamesProvider";


const router = createBrowserRouter(
    createRoutesFromElements(
            <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="vans" element={<Vans />} loader={vansLoader} />
                    <Route path="vans/:id" element={<VanDetail />} />

                    <Route path="host" element={<HostLayout />} >
                        <Route index element={<Dashboard />} />
                        <Route path="income" element={<Income />} />
                        <Route path="reviews" element={<Reviews />} />
                        <Route path="vans" element={<HostVans />} />

                        <Route path="vans/:id" element={<DetailLayout/>}>
                            <Route index element={<HostVanDetail />} />
                            <Route path="pricing" element={<HostVanPricing />} />
                            <Route path="photos" element={<HostVanPhotos />} />
                        </Route>
                    </Route>

                    <Route path="*" element={<NotFound />} />

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
