import type { NextPage } from 'next'
import Head from 'next/head'
import requests from "./requests/requesturl";
import Header from "./components/Header"
import Banner from "./components/Banner"
import { apiResponse } from './typscript/typescript'

type apiResponseProps={
    netflixOriginals:apiResponse[],
    trendingNow:apiResponse[],
    topRated:apiResponse[],
    actionMovies:apiResponse[],
    comedyMovies:apiResponse[],
    horrorMovies:apiResponse[],
    romanceMovies:apiResponse[],
    documentaries:apiResponse[],
};




export const getServerSideProps = async () => {
  
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ])
  
  

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
      
    },
  }
}


const Home = ({
netflixOriginals,
trendingNow,
topRated,
actionMovies,
comedyMovies,
horrorMovies,
romanceMovies,
documentaries,
}:apiResponseProps) => (
  <div>
    <Header />
    <main>
      <Banner netflixOriginals={netflixOriginals} />
    </main>
  </div>
)

export default Home
