import React from 'react';
import { Carousel } from 'react-bootstrap';


const MyCarousel = ({img1 , img2, img3}) => {
  return (
    <Carousel className='mx-auto h-[250px]'>
      <Carousel.Item>
        <img
          className="d-block w-full  h-[250px] object-cover"
          src={img1}
          alt="SPACE WEBPAGE"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-full  h-[250px] object-cover"
          src={img2}
          alt="SPACE WEBPAGE"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-full  h-[250px] object-cover"
          src={img3}
          alt="SPACE WEBPAGE"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
