import { options } from "@/utils/Options";
import React, { useEffect, useState, Suspense } from "react";
import { ClipLoader } from "react-spinners";
import CardSkeleton from "@/components/CardSkeleton";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useSearchParams } from "react-router-dom";

const LazyCard = React.lazy(() => import("@/components/Card"));

const LazyInfiniteScroll = React.lazy(() =>
  import("react-infinite-scroll-component")
);


const Search = ({ apiPath }) => {
  const [data, setData] = useState([]);
  const [searchParams] = useSearchParams();

  const queryTerm = searchParams.get("query");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/${apiPath}?query=${queryTerm}`,
        options
      );

      const data = await response.json();

      setData(data.results);
    };

    fetchData();
  }, [apiPath, queryTerm]);

  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const fetchMoreData = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/${apiPath}?query=${queryTerm}&page=${page}`,
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
    {data.length > 0 ? <section className="w-full  text-white max-w-screen-xl mx-auto px-4  flex flex-wrap  py-20">
        <h2 className="p-3 pb-7 font-inter font-bold text-lg md:text-2xl">{`Search results of "${queryTerm}"`}</h2>
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen w-full">
              <ClipLoader color="#ffffff" />
            </div>
          }
        >
         
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
      </section> : 
      <section className="w-full h-screen text-white max-w-screen-xl mx-auto px-4  flex flex-wrap  py-20">
        <h2 className="p-3 pb-7 font-inter font-bold text-2xl">{`No results found for "${queryTerm}"`}</h2>
        <div className="w-full h-full flex justify-center items-center">
            <DotLottieReact
            className="w-1/3 h-1/4 md:w-1/2 md:h-1/2"
      src="https://lottie.host/bf2089d9-7c2b-4503-8f86-35da920539bf/5hSFrrERRN.lottie"
      loop
      autoplay
    />

        </div>
        </section>
        }
      
    </>
  );
};

export default Search;
