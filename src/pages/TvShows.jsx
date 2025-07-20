import Card from "@/components/Card";
import { options } from "@/utils/Options";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const TvShows = () => {
 const [data, setData] = useState([]);
    const [page, setPage] = useState(2); 
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/tv`,
        options
      );
      const data = await response.json();
      setData(data.results);
      
    }
    fetchMovie();
  }, []);
  

  const fetchMoreData = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/discover/tv?page=${page}`, options);
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
      <section className="w-full  text-white max-w-screen-xl mx-auto px-4  flex flex-wrap  py-20">
      <InfiniteScroll
  dataLength={data.length}
  next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
  className="grid  grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4"
>
  {data.map((item) => (
    <Card key={item.id} movie={item} />
  ))}
</InfiniteScroll>
      </section>
    </>
  );
}

export default TvShows