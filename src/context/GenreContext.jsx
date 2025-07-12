import useFetch from "@/hooks/UseFetch";

import { Children, createContext, useState } from "react";
import { options } from "@/utils/Options";

const GenreContext = createContext();

export const GenreProvider = ({children}) => {

   const apiPaths = ["/genre/movie/list", "/genre/tv/list"];

const fetchGenres = async () => {
 
    const responses = await Promise.all(
      apiPaths.map(async (path) => {
        const response = await fetch(`https://api.themoviedb.org/3${path}`, options);
        const data = await response.json();
        return data.genres; 
      })
    );

   
    const combinedGenres = [...responses[0], ...responses[1]];
   

    return combinedGenres;
 
};
fetchGenres()
   
    return (
    <GenreContext.Provider value={
       { fetchGenres}
    }>
        {children}
    </GenreContext.Provider>
)
}

export default GenreContext