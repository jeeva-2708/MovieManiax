import { Route, Routes } from "react-router-dom"
import { Home, Movie, MovieDetails, Search , TvShows, PageNotFound } from "../pages"


const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="movie/:id" element={<MovieDetails apiPath={"movie"}/>} />
            <Route path="tv/:id" element={<MovieDetails apiPath={"tv"}/>} />
            <Route path="movie" element={<Movie/>} />
            <Route path="tvShows" element={<TvShows/>} />
            <Route path="search" element={<Search apiPath={'/search/multi'}/>} />
            <Route path="*" element={<PageNotFound/>} />
        </Routes>
    </>
  )
}

export default AllRoutes