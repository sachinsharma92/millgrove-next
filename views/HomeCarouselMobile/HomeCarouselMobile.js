import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { MILLGROVE_LOGO } from "../../utils/assets";

const sliderData = [
  {
    title: "homes",
    text: "Millgrove homes embrace grand proportions. They are flooded with natural light and designed with sophisticated elegance and intricate craftsmanship. With an abundance of flexible space within each ‘shell & core’ home, you can finish the interior to suit your personal needs and taste. It is a place to be yourself, on a scale like no other.",
    img: '/images/carousel-img-1.png',
  },
  {
    title: "grounds",
    text: "Cocooned by flourishing greens and blossoming pathways, Millgrove is idyllic. Whether seeking serene time out, reconnecting with family and friends, or just taking a long walk, the sprawling grounds offer an indulgent escape from the bustle of the city. Let nature be your happy place.",
    img: '/images/carousel-img-2.png',
  },
  {
    title: "comforts",
    text: "Millgrove offers a unique opportunity to own a freehold property with the customary comforts found in the best condominiums. Services to each home have been meticulously planned so that you don’t have to worry. It is farmhouse-style living with peace of mind.",
    img: '/images/carousel-img-3.png',
  },
  {
    title: "location",
    text: "Millgrove is delicately distanced from the commotion of the city, yet effortlessly linked to thelivelier parts of the National Capital Region. On completion of several nearby government infrastructure projects, Millgrove will become one of the most connected places to live in Delhi NCR.",
    img: '/images/carousel-img-4.png',
  },
  {
    title: "Legacy",
    text: "At the heart of Millgrove is the desire to do good by its residents. As decades-long custodians of the land, the founding family wish to leave a mark they can be proud of. Dutiful thought, care, and attention to detail has been given at every step of the way to ensure that residents are afforded the finest of living experiences.",
    img: '/images/carousel-img-5.jpg',
  },
];

function HomeCarouselMobile(props) {
  return (
    <div className="home-carousel-mobile">
      <Carousel infiniteLoop={true} showThumbs={false} showArrows={false} showStatus={false}>
        {sliderData.map((item, index) => (
          <div className="slider-item" key={index}>
            <div className="carousel-text-mobile">
              <div className="carousel-heading-mobile">
                {item.title}
              </div>
              <div className="carousel-subtext-mobile">
                {item.text}
              </div>
            </div>
            <div className="carousel-img-mobile">
              <img src={item.img} alt="" />
            </div>
          </div>
        ))}
      </Carousel>

    </div>
  );
}

export default HomeCarouselMobile;
