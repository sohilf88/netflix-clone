import {createSlice,PayloadAction} from "@reduxjs/toolkit"

type initialStateType={
    value:boolean,
    isLoading?:boolean,
}
const initialState:initialStateType={
    value:false,
    isLoading:true,
}
export const modalStateSlice=createSlice({
    name:"ModalState",
    initialState,
    reducers:{
        OpenModal:(state)=>{
            // state.value=action.payload;
            state.value=true
            // state.isLoading=false;
        },
        CloseModal:(state)=>{
            state.value=false;
            // state.isLoading=false;
        },
        // handleClose:(state,action:PayloadAction<boolean>)=>{
        //     state.value=false;
        //     // state.isLoading=false;

        // },
        // handleOpen:(state,action:PayloadAction<boolean>)=>{
        //     state.value=true;
        //     // state.isLoading=false;

        
        
        
    }

})

export default modalStateSlice.reducer;
export const {OpenModal,CloseModal}=modalStateSlice.actions;