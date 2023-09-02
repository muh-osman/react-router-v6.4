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
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./layout/HostLayout";
import Layout from "./layout/Layout";
import HostVans from "./pages/Host/HostVans";
import HostVanDetail from "./pages/Host/HostVanDetail";
import DetailLayout from "./layout/DetailLayout";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import HostVanPricing from "./pages/Host/HostVanPricing";
import NotFound from "./pages/NotFound";
import Login, {action as loginAction} from "./pages/Login";
import Error from "./pages/Error";
// 
import NamesProvider from "./context/NamesProvider";
// Protect Route
import {requireAuth} from "./utils"


const router = createBrowserRouter(
    createRoutesFromElements(
            <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="vans" element={<Vans />} />
                    <Route path="vans/:id" element={<VanDetail />} />
                    <Route path="login" element={<Login />} action={loginAction} />

                    <Route path="host" element={<HostLayout />} loader = { async ({request}) => await requireAuth(request) } >

                        <Route index element={<Dashboard />} />
                        <Route path="income" element={<Income />} loader = { async ({request}) => await requireAuth(request) } />
                        <Route path="reviews" element={<Reviews />} loader = { async ({request}) => await requireAuth(request) } />
                        <Route path="vans" element={<HostVans />} />

                        <Route path="vans/:id" element={<DetailLayout/>} >
                            <Route index element={<HostVanDetail />}  />
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
