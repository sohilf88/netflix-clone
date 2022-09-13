import Link from "next/link"
import {IoSearch} from "react-icons/io5"
import { HiBell } from "react-icons/hi";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-[#141414] text-white h-[72px] px-14 ">
        <span className="sm:hidden"><Link href="#">Browse</Link></span>
        <ul className="sm:flex space-x-3 hidden ">
            <li >
                <Link href="#">Home</Link>
            </li>
            <li>
                <Link href="#">TV Shows</Link>
            </li><li>
                <Link href="#">Movies</Link>
            </li><li>
                <Link href="#">New & Popular</Link>
            </li><li>
                <Link href="#">My List</Link>
            </li>
        </ul>
        <div className="right-pane flex items-center gap-4 justify-center">
            <IoSearch className="text-[25px] hidden sm:block"></IoSearch>
            <span className="md:inline-block hidden">Kids</span>
            <HiBell className="text-[25px]"></HiBell>
                
        </div>
        
        
        
    </div>
  )
}

export default Header