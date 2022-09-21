import { apiResponse } from "../typscript/typescript"
import {BsCaretLeft,BsCaretRight} from "react-icons/bs"
import MovieThumbnail from './MovieThumbnail';

type apiResponseProps={
    title:string,
    movies:apiResponse[],
}


const SliderRow = ({title, movies}:apiResponseProps) =>{
  return (
    <div>
        
    </div>
  )
}

export default SliderRow