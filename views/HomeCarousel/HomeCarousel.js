import { useEffect } from "react";
import Image from "next/image";

function HomeCarousel() {
  useEffect(() => {
    let controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 0,
        duration: 1300,
        offset: 76,
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
  return (
    <div className="millglove-slider-section">
      <section className="slide1 slide-sec">
        <div className="slider-body">
          <div className="img-box">
            <Image src="/images/carousel-img-1.png" alt="" className="carousel-img" layout="fill" />
          </div>
          <div className="carousel-text-div">
            <div className="carousel-heading title1"> <span className="notera-text-style">The</span> Homes</div>
            <div className="carousel-subtext description">
              Millgrove homes embrace grand proportions. They are flooded with
              natural light and designed with sophisticated elegance and intricate
              craftsmanship. With an abundance of flexible space within each
              ‘shell & core’ home, you can finish the interior to suit your
              personal needs and taste. It is a place to be yourself, on a scale
              like no other.
            </div>
          </div>
        </div>
      </section>

      <section className="slide2 slide-sec">
        <div className="slider-body">
          <div className="img-box">
            <Image src="/images/carousel-img-2.png" alt="" className="carousel-img" layout="fill" />
          </div>
          <div className="carousel-text-div">
            <div className="carousel-heading title1"> <span className="notera-text-style">The</span> Homes 2</div>
            <div className="carousel-subtext description">
              Millgrove homes embrace grand proportions. They are flooded with
              natural light and designed with sophisticated elegance and intricate
              craftsmanship. With an abundance of flexible space within each
              ‘shell & core’ home, you can finish the interior to suit your
              personal needs and taste. It is a place to be yourself, on a scale
              like no other.
            </div>
          </div>
        </div>
      </section>

      <section className="slide3 slide-sec">
        <div className="slider-body">
          <div className="img-box">
            <Image src="/images/carousel-img-3.png" alt="" className="carousel-img" layout="fill" />
          </div>
          <div className="carousel-text-div">
            <div className="carousel-heading title1"> <span className="notera-text-style">The</span> Homes 3</div>
            <div className="carousel-subtext description">
              Millgrove homes embrace grand proportions. They are flooded with
              natural light and designed with sophisticated elegance and intricate
              craftsmanship. With an abundance of flexible space within each
              ‘shell & core’ home, you can finish the interior to suit your
              personal needs and taste. It is a place to be yourself, on a scale
              like no other.
            </div>
          </div>
        </div>
      </section>

      <section className="slide4 slide-sec">
        <div className="slider-body">
          <div className="img-box">
            <Image src="/images/carousel-img-4.png" alt="" className="carousel-img" layout="fill" />
          </div>
          <div className="carousel-text-div">
            <div className="carousel-heading title1"> <span className="notera-text-style">The</span> Homes 4</div>
            <div className="carousel-subtext description">
              Millgrove homes embrace grand proportions. They are flooded with
              natural light and designed with sophisticated elegance and intricate
              craftsmanship. With an abundance of flexible space within each
              ‘shell & core’ home, you can finish the interior to suit your
              personal needs and taste. It is a place to be yourself, on a scale
              like no other.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeCarousel;
