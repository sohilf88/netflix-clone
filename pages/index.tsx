import type { NextPage } from 'next'
import Head from 'next/head'
import requests from "./requests/requesturl"
import Header from "./components/Header"
import Banner from "./components/Banner"

export const getServerSideprops =async()=>{

  return { 
    props:{

    }
  }
}
const Home = () => {
  return (
    <div>
      <Header/>
      <main>
        <Banner/>
      </main>
    </div>
  )
}

export default Home
