import { lazy, Suspense } from "react";
import "./App.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const AllRoutes = lazy(() => import("./routes/AllRoutes"));
const Headers = lazy(() => import("./components/Headers"));
const Footer = lazy(() => import("./components/Footer"));
import { HashLoader } from "react-spinners";


import ScrollToTop from "./components/ScrollToTop ";

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense
        fallback={
          <div className=" h-screen flex justify-center  items-center p-5">
            <HashLoader
  color="#ffffff"
  cssOverride={{}}
  loading
  speedMultiplier={1}
/>
          </div>
        }
      >
        <Headers />
        <AllRoutes />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
