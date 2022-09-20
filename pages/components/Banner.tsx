import { apiResponse } from "../typscript/typescript";
import {baseUrl} from "../requests/baseuri";
import {useState,useEffect} from "react";
import Image from "next/image"
import {BsFillPlayFill} from "react-icons/bs";
import {HiInformationCircle} from "react-icons/hi";


type propApi={ 
  netflixOriginals:apiResponse[]
}
const Banner = ({netflixOriginals}:propApi) => {
  
  const[randomBanner, setRandomBanner]=useState<apiResponse | null>(null);
  useEffect(()=>{
    setRandomBanner(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
  },[netflixOriginals])
  console.log(randomBanner);
  
  return (
    <section className="text-white flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12 px-5" >
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image className="" src={`${baseUrl}${randomBanner?.backdrop_path || randomBanner?.poster_path}`} layout="fill" objectFit="cover"></Image>
      </div>
      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        {randomBanner?.title || randomBanner?.name || randomBanner?.original_name}
      </h1>
      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {randomBanner?.overview}
      </p>
      <div className="flex gap-2">
        <button className="btn bg-white text-black" type="submit">
          <BsFillPlayFill className="h-4 w-4 text-black md:h-8 md:w-8"/>Play
          </button>


          <button className="btn bg-[gray]/70" type="submit"> 
          <HiInformationCircle className="h-4 w-4 text-white md:h-8 md:w-8"/>
          
          More info</button>
      </div>

          

        
        

    </section>

      
      
  )
}

export default Banner