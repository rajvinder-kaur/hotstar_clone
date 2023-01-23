import { Splide, SplideSlide } from '@splidejs/react-splide';
import React, { useEffect, useState } from 'react'
import instance from '../axios';
import '@splidejs/react-splide/css/core';
import '@splidejs/react-splide/css/skyblue';

function AutoplayBanner({ fetch }) {

  const baseURL = "https://image.tmdb.org/t/p/w500";
  const [arr, getarr] = useState([]);
  useEffect(() => {
    getData()
  }, [fetch]);

  async function getData() {
    const request = await instance.get(fetch);
    const api = await request
    getarr(api.data.results)
    console.log(arr)
  }


  return (

    <div className='banner'>
      <Splide options={{
        perPage: 1,
        pagination: false,
        autoplay: true,
        autoWidth: true,
         gap:"1rem",
         type: 'loop',
         padding:"5rem",
      }}>
        {arr.map((item) => {
          return (
            <SplideSlide key={item.id}>
              <div className="card">
                <div className="text">
                  <h1>{item.original_title}</h1>
                  <span>{item.original_language}</span>
                  <span>{item.release_date}</span>
                  <p>{item.overview}</p>
                </div>
                <img src={`${baseURL}${item.backdrop_path}`} alt="" align="right" />
              </div>
            </SplideSlide>
          )
        })}
      </Splide>
    </div>
  );
}
export default AutoplayBanner;
