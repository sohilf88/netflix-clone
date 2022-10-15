import React from 'react'
import Image from 'next/image'

const signup = () => {
  return (
    <>
    
        <div className="w-full relative h-[85vh] bg-gradient-to-z flex items-center justify-center ">
            <Image src="/signUP.jpg"
                layout="fill"
                objectFit="cover"
                className=" opacity-80 -z-10"/>
            
            <header className="absolute left-0 top-0 flex items-center justify-between px-4 py-4 md:px-8 md:py-0 w-full" >
             <div className="w-[120px] md:w-[300px] -z-1 ">
            <Image
            src="https://rb.gy/ek4j9f"
            width="180"
            height="100"
            objectFit="cover"/>
            
            </div>
            
            <button className="bg-[#E50914] px-1 py-0.5 rounded-sm sm:px-2 sm:py-1 mx-3" type="submit">Sign In</button>
        </header>
        
        <div className="max-w-md px-2 md:max-w-3xl space-y-6">
            <h1 className="text-3xl font-semibold px-4 md:text-6xl  md:font-bold text-center">Unlimited movies, TV shows and more.</h1>
            <h2 className="text-xl py-2 md:text-3xl text-center ">Watch anywhere. Cancel anytime.</h2>
            <h4 className="text-xl py-2 px-4 md:text-xl md:px-0 text-center">Ready to watch? Enter your email to create or restart your membership.</h4>
            <div className="md:flex px-4 space-y-8 md:space-y-0 text-center">
                
            <label className="md:inline-block md:flex-1">
                <input className=" rounded-l-sm w-full md:py-6 px-2 py-2.5 text-black outline-none" type="email" name="email" id="email"  placeholder="Email address" required/>
            </label>
            
            
            <button className="px-8 py-2 inline-block rounded-sm md:text-3xl md:px-16 md:py-4 bg-[#E50914] md:rounded-r-sm active:bg-red-700" type="submit">Get Started</button>
            
            </div>
        </div>
        
        
                
    
        </div>
        <div className="bg-gray-900 py-1"></div>
    
    </>
  )
}

export default signup