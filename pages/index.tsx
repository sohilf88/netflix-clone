import type { NextPage } from 'next'
import Head from 'next/head'
import requests from "./requests/requesturl"
import Header from "./components/Header"
import Banner from "./components/Banner"


export const getServerSideProps =async ()=>{
  const [
    fetchTrending,
    fetchNetflixOriginals,
    fetchTopRated,
    fetchActionMovies,
    fetchComedyMovies,
    fetchHorrorMovies,
    fetchRomanceMovies,
    fetchDocumentaries,
    fetchMostPopularMovies,
    fetchUpcoming,
  ]=await Promise.all([
    fetch(requests.fetchTrending).then((response)=>response.json()),
    fetch(requests.fetchNetflixOriginals).then((response)=>response.json()),
    fetch(requests.fetchTopRated).then((response)=>response.json()),
    fetch(requests.fetchActionMovies).then((response)=>response.json()),
    fetch(requests.fetchComedyMovies).then((response)=>response.json()),
    fetch(requests.fetchHorrorMovies).then((response)=>response.json()),
    fetch(requests.fetchRomanceMovies).then((response)=>response.json()),
    fetch(requests.fetchDocumentaries).then((response)=>response.json()),
    fetch(requests.fetchMostPopularMovies).then((response)=>response.json()),
    fetch(requests.fetchUpcoming).then((response)=>response.json()),
  ]
    )
  
 return {
  props:{
  Trending:fetchTrending.results,
  NetflixOriginals:fetchNetflixOriginals.results,
  TopRated:fetchTopRated.results,
  ActionMovies:fetchActionMovies.results,
  ComedyMovies:fetchComedyMovies.results,
  HorrorMovies:fetchHorrorMovies.results,
  omanceMovies:fetchRomanceMovies.results,
  Documentaries:fetchDocumentaries.results,
  Upcoming:fetchUpcoming.results,
  MostPopularMovie:fetchMostPopularMovies.results,
  }
 }
} 
const Home: NextPage = ({ 
Trending,
NetflixOriginals,
TopRated,
ActionMovies,
ComedyMovies,
HorrorMovies,
RomanceMovies,
DocumentMovies,
MostPopularMovies,
UpcomingMovies,
}) => {
  return (
    
      <main>
        <Header/>
        <Banner NetflixOriginals={NetflixOriginals}/>
      
    
      </main>

  )
}

export default Home
