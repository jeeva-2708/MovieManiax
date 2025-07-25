import { options } from "@/utils/Options";
import React, { useEffect, useState, Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import Star from "@/assets/Star.svg";
import "flowbite";
import DetailsSkeleton from "@/components/DetailsSkeleton";
import NoImage from "../assets/No_picture_available.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import CardSkeleton from "@/components/CardSkeleton";
const LazyCard = React.lazy(() => import("@/components/Card"));

const MovieDetails = ({ apiPath }) => {
  const params = useParams();

  const [data, setData] = useState({});
  const [credits, setCredits] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [recommendation, setRecommendation] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovie() {
      const [detailsRes, creditsRes, similarRes, recommendationsRes] =
        await Promise.all([
          fetch(
            `https://api.themoviedb.org/3/${apiPath}/${params.id}`,
            options
          ),
          fetch(
            `https://api.themoviedb.org/3/${apiPath}/${params.id}/credits`,
            options
          ),
          fetch(
            `https://api.themoviedb.org/3/${apiPath}/${params.id}/similar`,
            options
          ),
          fetch(
            `https://api.themoviedb.org/3/${apiPath}/${params.id}/recommendations`,
            options
          ),
        ]);

      const [details, credits, simliarDetails, recommendations] =
        await Promise.all([
          detailsRes.json(),
          creditsRes.json(),
          similarRes.json(),
          recommendationsRes.json(),
        ]);
      setData(details);
      setCredits(credits.crew);
      setSimilar(simliarDetails.results);
      setRecommendation(recommendations.results);
      setLoading(false);
    }
    fetchMovie();
  }, [apiPath, params]);

  const {
    backdrop_path,
    genres,
    overview,
    poster_path,
    runtime,
    release_date,
    tagline,
    title,
    vote_average,
    name,
    status,
    first_air_date,
  } = data;


  const releaseDate = release_date || first_air_date;
  const formatRuntime = (runtime) => {
    if (!runtime || typeof runtime !== "number") return "Unknown";

    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;

    return `${hours}h ${minutes}m`;
  };

  function formatDate(dateString) {
    const [year, month, day] = dateString?.split("-");

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const monthName = monthNames[parseInt(month, 10) - 1];

    return `${day} ${monthName} ${year}`;
  }

  const director = credits.find((person) => person.job === "Director");
  const writer = credits.find(
    (person) => person.job === "Writer" || "Original Concept"
  );
  const directorName = director?.name;
  const WriterName = writer?.name || "Unknown";
  const bgImage = `https://image.tmdb.org/t/p/original/${backdrop_path}`;
  const posterImg = `https://image.tmdb.org/t/p/original/${poster_path}`;
  

  if(loading){
    return <DetailsSkeleton/>
  }

  return (
    <>
      <section className="relative w-full ">
        <div
          className="absolute bg-cover bg-center  lg:bg-top  w-full h-full "
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute bottom-0 left-0 w-full h-[250px] bg-gradient-to-b from-transparent to-[#0B0C10] pointer-events-none z-20"></div>
        </div>

        <div className="relative z-20  max-w-screen-xl mx-auto px-4  pt-28">
          <div className=" lg:flex  gap-10">
            {/* poster_path */}
            <div className="  max-w-[408px] max-h-[612px]  md:w-[455px] md:h-[682px] mx-auto">
              <img loading='lazy' src={poster_path? posterImg : NoImage} className=" rounded-3xl" alt="" />
            </div>
            {/* details */}
            <div className="w-full  text-white pt-6 mb-10 lg:mb-0">
              <h3 className=" text-white font-bangers text-2xl ">
                {title || name}
              </h3>
              <span className="font-inter text-[#8B8B8B] text-base inline-block mb-2">
                {tagline}
              </span>
              {/* genres */}
              <div className="flex flex-wrap gap-2 mb-1">
                {genres?.map((genre) => (
                  <span className="bg-black rounded-lg p-1" key={genre.id}>
                    {genre.name}
                  </span>
                ))}
              </div>
              {/* rating */}
              <div className="flex items-center gap-1 mb-3">
                <span>
                  <img className="size-5" src={Star} alt="" />
                </span>
                <span className="text-xl">{vote_average?.toFixed(1)}/10</span>
              </div>
              {/* overview */}
              <div className="mb-3">
                <h3 className="text-2xl font-bold mb-1">overview</h3>
                <p className="font-light">{overview}</p>
              </div>
              {/* status releaseDate runtime */}
              <div className="flex  gap-10 lg:gap-5 my-5 ">
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <span className="font-semibold text-xl">Status:</span>
                  <span>{status}</span>
                </div>
                {data && (
                  <div className="flex flex-col md:flex-row items-center  gap-2 ">
                    <span className="font-semibold text-xl">Release Date:</span>
                    <span>
                      {releaseDate ? formatDate(releaseDate) : "Unknown"}
                    </span>
                  </div>
                )}
                {runtime && (
                  <div className="flex flex-col md:flex-row items-center  gap-2">
                    <span className="font-semibold text-xl">Runtime:</span>
                    <span>{formatRuntime(runtime)}</span>
                  </div>
                )}
              </div>
              {directorName && (
                <>
                  {/* line */}
                  <div className="h-[1px] w-full bg-[#787878]"></div>
                  {/* Director */}
                  <div className="flex items-center  gap-2 my-5">
                    <span className="font-semibold text-xl">Director:</span>{" "}
                    <span>{directorName}</span>
                  </div>
                </>
              )}
              {/* line */}
              <div className="h-[1px] w-full bg-[#787878]"></div>
              {/* Writer */}
              <div className="flex items-center  gap-2 my-5">
                <span className="font-semibold text-xl">Writer:</span>
                <span>{WriterName}</span>
              </div>
              {/* line */}
              <div className="h-[1px] w-full bg-[#787878]"></div>
            </div>
          </div>
        </div>
      </section>
      {/* similar */}
      {similar?.length > 0 && (
        
          <section className=" text-white mb-10 max-w-screen-xl mx-auto px-4 h-full">
            <div className="mb-5 pl-3">
              <h2 className="font-bangers text-3xl">Similar</h2>
            </div>
            <div>
              <Carousel
                orientation="horizontal"
                opts={{
                  align: "start",
                  dragFree: true, 
                }}
              >
                <CarouselContent>
                  {similar.map((data) => (
                    <CarouselItem
                      key={data.id}
                      className="basis-1/3 md:basis-1/4 lg:basis-1/5"
                    >
                      <Suspense fallback={<CardSkeleton />}>
                        <LazyCard movie={data} />
                      </Suspense>
                      
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden xl:flex  bg-black" />
                <CarouselNext className="hidden xl:flex bg-black" />
              </Carousel>
            </div>
          </section>
        
      )}
      {/* recommendation */}
      {recommendation?.length > 0 && (
        <section className=" text-white mb-10 max-w-screen-xl mx-auto px-4 h-full">
          <div className="mb-5 pl-3">
            <h2 className="font-bangers text-3xl">Recommendation</h2>
          </div>
          <div>
            <Carousel
              orientation="horizontal"
              opts={{
                align: "start",
                dragFree: true, 
              }}
            >
              <CarouselContent>
                {recommendation.map((data) => (
                  <CarouselItem
                    key={data.id}
                    className="basis-1/3 md:basis-1/4 lg:basis-1/5"
                  >
                    <LazyCard movie={data} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden xl:flex  bg-black" />
              <CarouselNext className="hidden xl:flex bg-black" />
            </Carousel>
          </div>
        </section>
      )}
    </>
  );
};

export default MovieDetails;
