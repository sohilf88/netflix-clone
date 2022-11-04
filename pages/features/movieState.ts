import {createSlice,PayloadAction} from "@reduxjs/toolkit"
import { apiResponse } from "../typscript/typescript"

type movieState={
    value:null | apiResponse,
    listOfValue?:apiResponse[]
}
const initialState:movieState={
    value:null,
    listOfValue:[]
}
export const movieStateSlice=createSlice({
    name:"MovieState",
    initialState,
    reducers:{ 
       stateOfMovie:(state,action:PayloadAction<null | apiResponse>)=>{
            state.value=action.payload
       } 
    }
})


export const {stateOfMovie}=movieStateSlice.actions;
export default movieStateSlice.reducer;