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
  const endPoints = {
    trending: "/trending/all/day",
    popular: "/movie/popular",
    topRated: "/movie/top_rated",
  };

const [selected , setSelected] = useState("")
 
  
  const [image, setImage] = useState();
  const [randomMovie, setRandomMovie] = useState();

  const { data: trending } = useFetch(endPoints.trending);

  const { data: popular } = useFetch(endPoints.popular);
  const { data: topRated } = useFetch(endPoints.topRated);

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
    if (trending.length === 0) return;

    // for run immediately

    function randomImage() {
      const random = trending[Math.floor(Math.random() * trending.length)];
      setRandomMovie(random);
      setImage(`https://image.tmdb.org/t/p/original/${random.backdrop_path}`);
    }
    randomImage();

    // then runs continuesly
    const interval = setInterval(() => {
      const random = trending[Math.floor(Math.random() * trending.length)];
      setRandomMovie(random);
      setImage(`https://image.tmdb.org/t/p/original/${random.backdrop_path}`);
    }, 60000);
    return () => clearInterval(interval);
  }, [trending]);



  

  return (
    <>
      {/* main section */}
      <section className="w-full min-h-[600px]">
        <div
          className="relative bg-cover bg-center w-full min-h-[600px]"
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
                    if (value) setSelected(value);
                  }}
                >
                  <ToggleGroupItem value={items.buttonNameOne} >
                    {items.buttonNameOne}
                  </ToggleGroupItem>
                  <ToggleGroupItem value={items.buttonNameTwo} >
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
