import { useState, useEffect, useContext } from "react";
import GenreContext from "../context/GenreContext";
import Star from "@/assets/Star.svg"

const Card = ({ movie }) => {
  const { id, title, name, poster_path, genre_ids, overview, first_air_date, release_date, vote_average } = movie;
   
  
  const { fetchGenres } = useContext(GenreContext);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getGenres = async () => {
      const data = await fetchGenres();
      setGenres(data);
    };

    getGenres();
  }, [fetchGenres]);

  function formatDate(dateString) {
  const [year, month, day] = dateString.split("-");

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const monthName = monthNames[parseInt(month, 10) - 1]; 

  return `${day} ${monthName} ${year}`;
}



  const image = `https://image.tmdb.org/t/p/original/${poster_path}`;

  return (
    <>
      <div className="card w-full h-full   shadow-sm ">
        <figure className="">
          <img src={image} alt={title} className="rounded-xl " />
        </figure>
        <div className="card-body  p-1 lg:p-2 ">
          <h2 className="card-title text-base   lg:text-base line-clamp-1 font-inter font-bold italic pl-1 lg:pl-1">{title || name}</h2>
          <div className="flex gap-3 flex-nowrap overflow-hidden ">
            {genre_ids.map((movieGenreId , index) => {
              if (index >= 2) return null
              const matchedGenre = genres.find(
                (item) => item.id === movieGenreId
              );
              return matchedGenre ? (
                <span className="bg-[#000000] text-[#F5F5F5] text-xs p-1 lg:font-medium   rounded-md  whitespace-nowrap" key={matchedGenre.id}>{matchedGenre.name}</span>
              ) : null;
            })}
          </div>
          <div className="lg:flex justify-between text-xs lg:pl-1">
            <div className="text-[#F5F5F5] italic text-[10px] pl-1">{release_date ? formatDate(release_date) : formatDate(first_air_date)}</div>
            <div className="hidden lg:flex items-center gap-1"><span><img src={Star} alt="" /></span><span>{vote_average.toFixed(1)}/10</span></div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Card;
