import type { NextPage } from 'next'
import Head from 'next/head'
import requests from "./requests/requesturl"
import Header from "./components/Header"
import Banner from "./components/Banner"


const Home: NextPage = () => {
  return (
    
      <main>
        <Header></Header>
        <Banner></Banner>
      
    
      </main>

  )
}

export default Home
