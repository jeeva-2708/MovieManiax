import { useEffect, useState } from "react";
import useFetch from "../hooks/UseFetch";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import "flowbite";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Card from "@/components/Card";

const Home = () => {
  const [trendingEndpoint, setTrendingEndpoint] = useState("/trending/all/day");
  const [popularEndpoint, setPopularEndpoint] = useState("/movie/popular");
  const [topRatedEndpoint, setTopRatedEndpoint] = useState("/movie/top_rated");

  const { data: mainSec } = useFetch("/discover/movie");
  const { data: trending } = useFetch(trendingEndpoint);
  const { data: popular } = useFetch(popularEndpoint);
  const { data: topRated } = useFetch(topRatedEndpoint);

  const [selected, setSelected] = useState({
    Trending: "Day",
    Popular: "Movie",
    "Top Rated": "Movie",
  });

  const [image, setImage] = useState();
  const [randomMovie, setRandomMovie] = useState();

  useEffect(() => {
    setTrendingEndpoint(
      selected.Trending === "Day" ? "/trending/all/day" : "/trending/all/week"
    );
    setPopularEndpoint(
      selected.Popular === "Movie" ? "/movie/popular" : "/tv/popular"
    );
    setTopRatedEndpoint(
      selected["Top Rated"] === "Movie" ? "/movie/top_rated" : "/tv/top_rated"
    );
  }, [selected]);

  const allCarousel = [
    {
      id: 1,
      name: "Trending",
      buttonNameOne: "Day",
      buttonNameTwo: "Week",
      data: trending,
    },
    {
      id: 2,
      name: "Popular",
      buttonNameOne: "Movie",
      buttonNameTwo: "Tv",
      data: popular,
    },
    {
      id: 3,
      name: "Top Rated",
      buttonNameOne: "Movie",
      buttonNameTwo: "Tv",
      data: topRated,
    },
  ];

  useEffect(() => {
    if (mainSec.length === 0) return;

    // for run immediately

    function randomImage() {
      const random = mainSec[Math.floor(Math.random() * mainSec.length)];
      setRandomMovie(random);
      setImage(`https://image.tmdb.org/t/p/original/${random.backdrop_path}`);
    }
    randomImage();

    // then runs continuesly
    const interval = setInterval(() => {
      const random = mainSec[Math.floor(Math.random() * mainSec.length)];
      setRandomMovie(random);
      setImage(`https://image.tmdb.org/t/p/original/${random.backdrop_path}`);
    }, 60000);
    return () => clearInterval(interval);
  }, [mainSec]);

  return (
    <>
      {/* main section */}
      <section className="w-full min-h-[600px]">
        <div
          className="relative bg-cover  bg-center  w-full min-h-[600px]"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>

          {randomMovie ? (
            <div className="relative flex justify-center items-center min-h-[600px]">
              <div className="w-full max-w-screen-xl mx-auto px-4">
                <div className="text-white flex flex-col justify-center items-center text-center">
                  <h1 className="font-bangers text-4xl mb-7">
                    {randomMovie.name || randomMovie.title}
                  </h1>
                  <p className="w-3/4 font-inter mb-7">
                    {randomMovie.overview}
                  </p>
                  <button className="btn bg-[#000000] text-white rounded-xl w-52 text-base">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {/* carousel section */}
      <section className="text-white w-full max-w-screen-xl mx-auto px-4">
        {allCarousel.map((items) => (
          <div key={items.id} className="my-10">
            <div className="flex justify-between items-center mb-7">
              <h3 className="font-bangers text-2xl ">{items.name}</h3>
              <div>
                <ToggleGroup
                  defaultValue={items.buttonNameOne}
                  type="single"
                  size="lg"
                  onValueChange={(value) => {
                    if (!value) return;

                    setSelected((prev) => ({
                      ...prev,
                      [items.name]: value,
                    }));
                  }}
                >
                  <ToggleGroupItem value={items.buttonNameOne}>
                    {items.buttonNameOne}
                  </ToggleGroupItem>
                  <ToggleGroupItem value={items.buttonNameTwo}>
                    {items.buttonNameTwo}
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
            <div>
              <Carousel orientation="horizontal">
                <CarouselContent>
                  {items.data.map((data) => (
                    <CarouselItem key={data.id} className=" basis-1/3">
                      <Card movie={data} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Home;
