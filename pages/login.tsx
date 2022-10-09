import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import {FiLock,FiUnlock} from "react-icons/fi"
import {useState} from "react"
import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from './hooks/useAuth'


type IFormInput ={
  email: string;
  password: string;
}
const Login = () => {
  const {signIn,signUp} =useAuth();
  const [login,setLogin]=useState(false)
  const { register,
    handleSubmit,
    watch,
   formState: { errors }, } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async(data) => {
    console.log(data.email);
    if(login){
        await signIn(data.email,data.password)
        
      }
      else{
        await signUp(data.email,data.password)
        
      }
    }
    
  
  
    const [input,setInput]=useState(false)
    

  return (
    <div className="relative w-screen h-screen flex flex-col md:items-center md:justify-center md:bg-transparent ">
        <Head>
     <title>Netflix Login</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        objectFit="cover"
        className="!hidden md:!block -z-[100] md:opacity-60"
        
        />
        <div className="absolute -top-4 -left-1 md:top-1 md:left-4">
            <Image
            src="https://rb.gy/ek4j9f"
            width="180"
            height="100"
            objectFit="contain"
            
            />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-24 px-4 mx-1 md:max-w-md z-10 space-y-7 md:mt-0 md:bg-black/75 py-20 md:py-14 md:px-14 md:rounded ">
            <h1 className="text-4xl font-semibold">Sign in</h1>
            <div className="space-y-4">
                <input {...register("email",{required:true})} type="email" name="email" id="email" placeholder="Email or phone number" 
                className="input "/>
                  {errors.email && (
              <p className=" w-full inline-block p-1 text-[13px] font-light  text-orange-500">
                Please enter a valid email.
              </p>
            )}
                
                <div className="w-full inline-block relative">
                <input {...register("password",{required:true,minLength:5,maxLength:12})} type={input?"text":"password"} placeholder="Password" 
                className="input"/>
                {errors.password && (
              <p className="p-1 w-full inline-block text-[13px] font-light text-orange-500">
                Your password must contain between 5 and 12 characters.
              </p>
            )}
            
                {input?(<FiUnlock className="input-icons" onClick={()=>setInput(false)}/>):(<FiLock className="input-icons" onClick={()=>setInput(true)}/>)}
                
                </div>
                
            </div>
            
            <button className="w-full inline-block px-3 py-3 bg-[#E50914] rounded text-bold " type="submit">Sign in</button>
            <div className="text-[gray]">
          New to Netflix?{' '}
          <button
            className="cursor-pointer text-white hover:underline"
           
            type="submit"
          >
            Sign up now
          </button>
        </div>
        </form>
        
    </div>
  )
}

export default Login