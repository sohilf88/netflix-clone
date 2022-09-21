import { apiResponse } from "../typscript/typescript"
import {BsCaretLeft,BsCaretRight} from "react-icons/bs"
import MovieThumbnail from './MovieThumbnail';

type apiResponseProps={
    title:string,
    movies:apiResponse[]
}
const SliderRow = ({title,movies}:apiResponseProps) => {
  return (
    
    <div>
        <h3>{title}</h3>
        <div >
        <BsCaretLeft/>
        {movies.map((movie)=>{
        return (<MovieThumbnail key={movie.id} movie={movie}/>)    
    })}
        
        <BsCaretRight/>
        </div>
    </div>
  )
}

export default SliderRow