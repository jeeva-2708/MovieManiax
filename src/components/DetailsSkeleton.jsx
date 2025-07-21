import React from "react";
import { Skeleton } from "./ui/skeleton";

const DetailsSkeleton = () => {
  return (
    <>
      <section className="relative w-screen lg:h-screen">
        

        <div className="relative z-20  max-w-screen-xl mx-auto px-4  pt-28">
          <div className=" lg:flex  gap-10">
            {/* poster_path */}
            <div className="flex justify-center items-center mx-auto ">
              <Skeleton className="bg-[#2E2E3E] w-[200px] h-[300px] xs:w-[250px] xs:h-[350px]  md:w-[300px] md:h-[450px] rounded-lg" />
            </div>
            {/* details */}
            <div className="w-full  pt-6 mb-10 md:px-10 lg:mb-0">
              <Skeleton className="bg-[#2E2E3E] h-5   max-w-full mb-4" />
              <Skeleton className="bg-[#2E2E3E] h-5   max-w-[80%] mb-4" />
              <div className="w-full  pt-6 mb-10 ">
                <Skeleton className="bg-[#2E2E3E] h-5  max-w-full mb-4" />
                <Skeleton className="bg-[#2E2E3E] h-5 max-w-full mb-4" />
              </div>
              <div className="w-full  pt-6 mb-10 ">
              <Skeleton className="bg-[#2E2E3E] h-5  max-w-full mb-4" />
              <Skeleton className="bg-[#2E2E3E] h-5 max-w-full mb-4" />
              <Skeleton className="bg-[#2E2E3E] h-5 max-w-[70%] mb-4" />
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsSkeleton;
