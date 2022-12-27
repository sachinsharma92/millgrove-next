/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

function HomeCarousel() {
  const [slideDotActive, setSlideDotActive] = useState(false)

  useEffect(() => {

    var controller2 = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 1,
        duration: '87%',
      }
    });
    // build scenes
    new ScrollMagic.Scene({ triggerElement: ".slide1" })
      .setClassToggle("#high1", "active") // add class toggle
      .addTo(controller2);
    new ScrollMagic.Scene({ triggerElement: ".slide2" })
      .setClassToggle("#high2", "active") // add class toggle
      .addTo(controller2);
    new ScrollMagic.Scene({ triggerElement: ".slide3" })
      .setClassToggle("#high3", "active") // add class toggle
      .addTo(controller2);
    new ScrollMagic.Scene({ triggerElement: ".slide4" })
      .setClassToggle("#high4", "active") // add class toggle
      .addTo(controller2);
    new ScrollMagic.Scene({ triggerElement: ".slide5" })
      .setClassToggle("#high5", "active") // add class toggle
      .addTo(controller2);

    let controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 0,
        duration: 1300,
        offset: 0,
      },
    });

    let slides = document.querySelectorAll("section.slide-sec");
    for (let i = 0; i < slides.length; i++) {
      let animation = TweenMax.to(slides[i], 0.7, {
        scale: 0,
        opacity: 0,
        ease: Quad.easeInOut,
      });

      new ScrollMagic.Scene({
        triggerElement: slides[i],
      })
        .setPin(slides[i], { pushFollowers: false })
        .addTo(controller)
        .setTween(animation);
    }
  }, [])


  const sliderData = [
    {
      classStyle: 'slide1',
      imgUrl: '/images/carousel-img-1.png',
      title: 'Homes',
      description: `Millgrove homes embrace grand proportions. They are flooded with natural light and designed with sophisticated elegance and intricate craftsmanship. With an abundance of flexible space within each ‘shell & core’ home, you can finish the interior to suit your personal needs and taste. It is a place to be yourself, on a scale like no other.`
    },
    {
      classStyle: 'slide2',
      imgUrl: '/images/carousel-img-2.png',
      title: 'Grounds',
      description: `Cocooned by flourishing greens and blossoming pathways, Millgrove is idyllic. Whether seeking serene time out, reconnecting with family and friends, or just taking a long walk, the sprawling grounds offer an indulgent escape from the bustle of the city. Let nature be your happy place.`
    },
    {
      classStyle: 'slide3',
      imgUrl: '/images/carousel-img-3.png',
      title: 'Comforts',
      description: `Millgrove offers a unique opportunity to own a freehold property with the customary comforts found in the best condominiums. Services to each home have been meticulously planned so that you don’t have to worry. It is farmhouse-style living with peace of mind.`
    },
    {
      classStyle: 'slide4',
      imgUrl: '/images/carousel-img-4.png',
      title: 'Location',
      description: `Millgrove is delicately distanced from the commotion of the city, yet effortlessly linked to the livelier parts of the National Capital Region. On completion of several nearby government infrastructure projects, Millgrove will become one of the most connected places to live in Delhi NCR.`
    },
    {
      classStyle: 'slide5',
      imgUrl: '/images/carousel-img-5.jpg',
      title: 'Legacy',
      description: `At the heart of Millgrove is the desire to do good by its residents. As decades-long custodians of the land, the founding family wish to leave a mark they can be proud of. Dutiful thought, care, and attention to detail has been given at every step of the way to ensure that residents are afforded the finest of living experiences.`
    }
  ]

  return (
    <div id="pinMaster" className="millglove-slider-section">
      {sliderData.map((item, index) => (
        <section key={index} className={`${item.classStyle} slide-sec`}>
          <div className="slider-body">
            <figure className="img-box">
              <img src={item.imgUrl} alt="" className="carousel-img" />
            </figure>
            <div className="carousel-text-div">
              <div className="heading-sec">
                <h1 className="carousel-heading title1">{item.title}</h1>
              </div>
              <div className="carousel-subtext">
                <p className="description">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-style"></div>
        </section>
      ))}
      <div className="dot-section">
        <span className="dots" id="high1"></span>
        <span className="dots" id="high2"></span>
        <span className="dots" id="high3"></span>
        <span className="dots" id="high4"></span>
        <span className="dots" id="high5"></span>
      </div>
    </div>
  );
}

export default HomeCarousel;
