import React from 'react'
import { Skeleton } from './ui/skeleton'

const CardSkeleton = () => {
  return (
    <div className="card w-full h-451   shadow-sm ">
           
             <Skeleton className="bg-[#2E2E3E]  max-w-[235px] h-[190px]   sm:h-[270px] lg:h-[330px] rounded-xl" />
           
            <div className="flex flex-col gap-2 py-3 pl-0 ">
              <Skeleton className="bg-[#2E2E3E] h-2 md:h-3 max-w-[120px] xs:max-w-[150px] sm:max-w-[180px] md:max-w-[220px]" />
              <Skeleton className="bg-[#2E2E3E] h-2 md:h-3 max-w-[60px] xs:max-w-[100px] sm:max-w-[120px] md:max-w-[150px] " />
              
            </div>
          </div>
  )
}

export default CardSkeleton