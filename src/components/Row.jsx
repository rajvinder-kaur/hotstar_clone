
import { Splide, SplideSlide } from '@splidejs/react-splide';
import React, { useEffect, useState } from 'react'
import instance from '../axios';
import '@splidejs/react-splide/css/core';
import '@splidejs/react-splide/css/skyblue';

function Row({title , fetch}) {
    const [movies,setMovies]=useState([]);
    const baseURL ="https://image.tmdb.org/t/p/w500";
    useEffect(()=>{
      fetchData();
    },[fetch]);
    async function fetchData(){
        const request = await instance.get(fetch);
        setMovies(request.data.results)
    }
  return (
    <div className='row'>
      <span>{title}</span>
      <Splide options={{
         gap:"0.5rem",
         padding:"5rem",
         pagination: false,
          autoWidth: true,
      }}>
        {movies.map((x)=>{
            return(
                <SplideSlide id="slide" key={x.id}>
                  <div className="card-row" >
                    <img src={`${baseURL}${x.poster_path}`} alt={x.name} />
                    {/* <div className="info">
                      <div>{x.title}</div>
                      <div>{x.orignal_title}</div>
                    </div> */}
                  </div>
                </SplideSlide>
            )
        })}
      </Splide>
    </div>
  )
}

export default Row
