import React from 'react'
import {Carousel} from 'react-bootstrap'
import { Container } from 'reactstrap'
import ned01 from '../assets/images/ned01.jpg'
import ned02 from '../assets/images/ned02.jpg'
import ned03 from '../assets/images/ned03.jpg'
import './Header.css'

function HomeCarousel() {
  return (
    <div className=" mt-4">
        <Carousel>
          <Carousel.Item>
            <img
              className="imgcarousel d-block w-100"
              src={ned01}
              alt="First slide"
              
            />
            <Carousel.Caption>
              <h3>......</h3>
              <p>......</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imgcarousel d-block w-100"
              src={ned02}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>......</h3>
              <p>... ...</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imgcarousel d-block w-100"
              src={ned03}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>...</h3>
              <h5>...</h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default HomeCarousel
