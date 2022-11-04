import {configureStore} from "@reduxjs/toolkit"
import movieStateReducer from "../pages/features/movieState";
import modalStateSliceReducer from "../pages/features/modalState";
export const store=configureStore({
    reducer:{
        Movie:movieStateReducer,
        ModalState:modalStateSliceReducer,

    }
})

export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;