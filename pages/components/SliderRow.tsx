import { apiResponse } from "../typscript/typescript"
import {BsCaretLeft,BsCaretRight} from "react-icons/bs"
import MovieThumbnail from './MovieThumbnail';

type apiResponseProps={
    title:string,
    movies:apiResponse[],
}


const SliderRow = ({title, movies}:apiResponseProps) =>{
  return (
    <div className="h-40 space-y-0.5 md:space-y-2 text-xs md:text-xl lg:text-2xl">
      <h2>{title}</h2>
      <div className="relative group">
        <BsCaretLeft className="absolute h-7 w-7 hover:scale-125 top-0 bottom-0 m-auto left-0 opacity-0 group-hover:opacity-100 transition duration-200 z-50"/>
        <div className="flex overflow-x-scroll gap-2 scrollbar-hide">
         {
          movies.map((movie)=>(
            <MovieThumbnail key={movie.id} movie={movie}/>
          ))
         }
        </div>
        <BsCaretRight className="absolute h-7 w-7 hover:scale-125 top-0 bottom-0 m-auto right-2 opacity-0 group-hover:opacity-100 transition duration-200 z-50 "/>

      </div>




    </div>
   
  )
}

export default SliderRow