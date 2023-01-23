import React from 'react';
import AutoplayBanner from '../components/AutoplayBanner';
import Row from '../components/Row';
import requests from '../request'

function Home() {
  return (
    <div className='home'>
      {/* <h1>into home</h1> */}
      <AutoplayBanner fetch={requests.fetchBanner}/>
       <Row title="Hotstart Orignals" fetch={requests.fetchHotstarOrignals}/>
       <Row title="Popular Picks" fetch={requests.fetchTopRated}/>
       <Row title="Action" fetch={requests.fetchActionMovies}/>
       <Row title="Comedy" fetch={requests.fetchComedyMovies}/>
       <Row title="Horror" fetch={requests.fetchHorrorMovies}/>
       <Row title="Romance" fetch={requests.fetchRomanceMovies}/>
       <Row title="Drama" fetch={requests.fetchDramaMovies}/>
    </div>
  );
}

export default Home;
