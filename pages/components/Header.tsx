import Link from "next/link"
import {IoSearch} from "react-icons/io5"
import { HiBell } from "react-icons/hi";
import { useEffect,useState } from 'react';

//bg-[#141414]
const Header = () => {
// function handleScroll is used to change color / sticky on scroll - start here
const [isScroll,setIsScroll]=useState(false);

const handleScroll=()=>{
    if(window.scrollY>0){
        setIsScroll(true)
    }else{
        setIsScroll(false)
    }
};
useEffect(()=>{
    window.addEventListener("scroll",handleScroll);
    return ()=>{
        window.removeEventListener("scroll",handleScroll);
    }
    
},[])
// function to set Sticky Navbar ends here
     
return ( 
    <header className={`header-class ${isScroll && "bg-[#141414]"}`}>
        <span className="sm:hidden"><Link href="#">Browse</Link></span>
        <ul className="sm:flex space-x-5 hidden  ">
            <li className="hover:text-red-500 font-semibold" >
                <Link href="#">Home</Link>
            </li>
            <li className="hover:text-red-500">
                <Link href="#">TV Shows</Link>
            </li>
            <li className="hover:text-red-500">
                <Link href="#">Movies</Link>
            </li>
            <li className="hover:text-red-500">
                <Link href="#">New & Popular</Link>
            </li>
            <li className="hover:text-red-500">
                <Link href="#">My List</Link>
            </li>
        </ul>
        <div className="right-pane flex items-center gap-4 justify-center">
            <IoSearch className="text-[25px] hidden sm:block hover:text-red-500"></IoSearch>
            <span className="md:inline-block hidden hover:text-red-500">Kids</span>
            <HiBell className="text-[25px] hover:text-red-500"></HiBell>
                
        </div>
            
    </header>
  )
}

export default Header