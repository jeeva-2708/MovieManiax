import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { HashLoader } from "react-spinners";
const Home = lazy(() => import("../pages/Home"));
const Movie = lazy(() => import("../pages/Movie"));
const MovieDetails = lazy(() => import("../pages/MovieDetails"));
const Search = lazy(() => import("../pages/Search"));
const TvShows = lazy(() => import("../pages/TvShows"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

const AllRoutes = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="text-white h-screen flex justify-center  items-center p-4">
                 <HashLoader
  color="#ffffff"
  cssOverride={{}}
  loading
  speedMultiplier={1}
/>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="movie/:id"
            element={<MovieDetails apiPath={"movie"} />}
          />
          <Route path="tv/:id" element={<MovieDetails apiPath={"tv"} />} />
          <Route path="movie" element={<Movie />} />
          <Route path="tvShows" element={<TvShows />} />
          <Route path="search" element={<Search apiPath={"/search/multi"} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AllRoutes;
