import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

const Login = () => {
  return (
    <div className="relative w-screen h-screen flex flex-col md:items-center md:justify-center md:bg-transparent">
        <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        objectFit="cover"
        className="!hidden md:!block -z-[100]"
        
        />
        <div className="absolute -top-4 -left-1 md:top-1 md:left-4">
            <Image
            src="https://rb.gy/ek4j9f"
            width="180"
            height="100"
            objectFit="contain"
            
            />
        </div>
        <form className="mt-24 px-4 mx-1 md:max-w-md z-10  space-y-7 md:mt-0 md:bg-black/60 py-20 md:rounded md:px-16">
            <h1 className="text-4xl font-semibold">Sign in</h1>
            <div className="space-y-4">
                <input type="email" name="email" id="email" placeholder="Email or phone number" 
                className="input "/>
                <input type="password" name="email" id="email" placeholder="password" 
                className="input"/>
                <button className="w-full inline-block px-3 py-3 bg-red-600 rounded text-semibold " type="submit">Sign in</button>
            </div>
        </form>
        
    </div>
  )
}

export default Login