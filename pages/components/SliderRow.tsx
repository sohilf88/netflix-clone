import { apiResponse } from "../typscript/typescript"
import {BsCaretLeft,BsCaretRight} from "react-icons/bs"
import MovieThumbnail from './MovieThumbnail';
import {useRef,useState} from "react";


type apiResponseProps={
    title:string,
    movies:apiResponse[],
}


const SliderRow = ({title, movies}:apiResponseProps) =>{
  const rowRef=useRef<HTMLDivElement>(null);
  const [isScroll,setIsScroll]=useState(false);
  const handleClick=(direction:string)=>{
    if(rowRef.current){
      setIsScroll(true)
      const {scrollLeft,clientWidth}=rowRef.current;
      const scrollTo=direction==="left"?scrollLeft-clientWidth:scrollLeft+clientWidth
      rowRef.current.scrollTo({left: scrollTo, behavior: 'smooth' })
      
      
    }
  }
  return (
    <div className="h-40 space-y-0.5 md:space-y-2 text-xs md:text-xl lg:text-2xl">
      <h2>{title}</h2>
      <div className="relative group" >
        <BsCaretLeft className={` ${!isScroll && "hidden"} absolute h-7 w-7 hover:scale-125 top-0 bottom-0 m-auto left-2 transition duration-200 z-50 opacity-0 group-hover:opacity-100`} onClick={()=>handleClick("left")}/>
        
        <div className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2" ref={rowRef}>
         {
          movies.map((movie)=>(
            
            
            <MovieThumbnail key={movie.id} movie={movie}/>
           
          ))
         }
        </div>
        
        <BsCaretRight className={`absolute h-7 w-7 hover:scale-125 top-0 bottom-0 m-auto right-2 opacity-0 group-hover:opacity-100 transition duration-200 z-50 `} onClick={()=>handleClick("right")}/>

      </div>




    </div>
   
  )
}

export default SliderRow