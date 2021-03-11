import React,{Component} from 'react';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
 

let styles = {
    margin: 'auto',
    width: '500px'
  };

  const IMAGE_ARRAY = [
    {city: "Hong Kong", picture: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg" }, 
    {city: "Singapore", picture: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp"}, 
    {city: "Japan", picture: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp"}, 
    {city: "Las Vegas", picture: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp"}
  ];


const Carsl = () => {
	return (
		<div style={styles}>
			 <Carousel>
               {IMAGE_ARRAY.map((element) =>  <img src={element.picture} alt={element.city}/>)}
        </Carousel>
		</div>
	  )
}

export default Carsl;