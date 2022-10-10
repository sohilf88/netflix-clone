import React from 'react'
import {apiResponse} from "../typscript/typescript"
import {baseUrlw500} from "../requests/baseuri"
import Image from "next/image"
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { transcode } from 'buffer'



type ImageProps={
 movie: apiResponse ,  
 
}
const MovieThumbnail = ({movie}:ImageProps) => {
      
  return (
    <Tippy content=<span>Movie- <strong style={{color:"#E50914"}}>{movie.original_title || movie.original_name}</strong></span>  placement="bottom">
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px]  md:hover:rounded md:hover:scale-105 overflow-hidden" >
       <Image 
       src={`${baseUrlw500}${movie.backdrop_path ||movie.poster_path}`} 
       layout="fill"
       className="rounded"
       objectFit="cover"
       
       />
    </div>
     </Tippy>
  )
}

export default MovieThumbnail