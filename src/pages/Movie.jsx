
import { options } from "@/utils/Options";
import React, { useEffect, useState, Suspense } from "react";
import { ClipLoader } from "react-spinners";
import CardSkeleton from "@/components/CardSkeleton";
const LazyCard = React.lazy(() => import("@/components/Card"));
const LazyInfiniteScroll = React.lazy(() => import("react-infinite-scroll-component") )


const Movie = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie`,
        options
      );
      const data = await response.json();
      setData(data.results);
    }
    fetchMovie();
  }, []);

  const fetchMoreData = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?page=${page}`,
      options
    );
    const newData = await res.json();

    // update state
    setData((prev) => [...prev, ...newData.results]);

    // stop if no more pages
    if (newData.page >= newData.total_pages) {
      setHasMore(false);
    } else {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <>
      <section className=" text-white max-w-screen-xl mx-auto px-4  flex flex-wrap  py-20">
        <Suspense fallback={<div className="flex justify-center items-center h-screen w-screen">
              <ClipLoader color="#ffffff" />
            </div>}>
        <LazyInfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            <div className="col-span-full flex justify-center items-center h-40 w-full">
              <ClipLoader color="#ffffff" />
            </div>
          }
          className="grid  grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4"
        >
          {data.map((item) => (
            <Suspense key={item.id} fallback={<CardSkeleton />}>
              <LazyCard movie={item} />
            </Suspense>
          ))}
        </LazyInfiniteScroll>
        </Suspense>
      </section>
    </>
  );
};

export default Movie;
