import React, { useState, useEffect, useCallback } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const CarouselComponent = ({ slides }) => {

  return (

    <Carousel autoPlay interval={1500} showIndicators={false} showStatus={false} showThumbs={false} infiniteLoop>
      {slides?.length > 0 && slides?.map((item, index) => {
        return (
          <div key={index} >
            <img src={item?.image} />
          </div>
        )
      })}
    </Carousel>
  );
};