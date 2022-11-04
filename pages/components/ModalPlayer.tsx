
import MuiModal from '@mui/material/Modal'
import { useState } from 'react';
import {IoCloseSharp} from "react-icons/io5"
import ReactPlayer from 'react-player';
import {IoAdd} from "react-icons/io5";
import {BiLike} from "react-icons/bi"
import {FaPlay} from "react-icons/fa"
import {useSelector,useDispatch} from "react-redux"
import {RootState} from "../../store/store"
import {OpenModal,CloseModal} from "../features/modalState"


const ModalPlayer = () => {
  const Open =useSelector((store:RootState)=>store.ModalState.value)
  const dispatch=useDispatch()
 

  return (
    <MuiModal
    className="w-full max-w-5xl fixed !top-7 left-0 right-0 mx-auto rounded overflow-hidden overflow-y-scroll"
    open={Open} onClose={()=>dispatch(CloseModal())}>
        <>
        
        <button onClick={()=>dispatch(CloseModal())} className="modal-btn absolute right-5 top-3 z-50">
          <IoCloseSharp className="w-7 h-7 text-black transition hover:rotate-180"/>
        </button>
        <div className="relative pt-[56.25%]">
          <ReactPlayer
          className="top-0 left-0 absolute"
          url='https://www.youtube.com/watch?v=PE6pb7-tXYA'
          width="100%"
          height="100%"
          controls={true}
          muted={false}
          pip={true}
          playing={false}
          />
          
          
          
        </div>
        <div className="relative">
        <div className="flex space-x-3 items-center absolute top-5 left-3">
          
            <button className="modal-btn">
                <IoAdd className="w-7 h-7 text-white"/>
            </button>
            <button className="modal-btn">
              <BiLike className="w-7 h-7 text-white"></BiLike>
            </button>
          </div>
          </div>
       
        </>
        
        
    </MuiModal>
  )
}

export default ModalPlayer