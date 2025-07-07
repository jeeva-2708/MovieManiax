import { Route, Routes } from "react-router-dom"
import { Home, Movie, MovieDetails, Search , TvShows, PageNotFound } from "../pages"


const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="movie/:id" element={<MovieDetails/>} />
            <Route path="movie" element={<Movie/>} />
            <Route path="TvShows" element={<TvShows/>} />
            <Route path="search" element={<Search/>} />
            <Route path="*" element={<PageNotFound/>} />
        </Routes>
    </>
  )
}

export default AllRoutes