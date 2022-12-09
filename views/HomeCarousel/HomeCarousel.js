/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import gsap from "gsap";

function HomeCarousel() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({
      markers: false
    });

    var points = gsap.utils.toArray('.point');
    var indicators = gsap.utils.toArray('.indicator');
    var bgStyle = gsap.utils.toArray('.slide-sec .bg-style');



    var height = 100 * points.length;

    gsap.set('.indicators', { display: "flex" });

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".philosophie",
        start: "top center",
        end: "+=" + height + "%",
        scrub: true,
        id: "points",
        snap: "labelsDirectional"
      }
    })

    ScrollTrigger.create({
      trigger: ".philosophie .wrapper",
      start: "top top",
      end: "+=" + height + "%",
      scrub: true,
      pin: ".philosophie .wrapper",
      pinSpacing: true,
      id: "pinning",
      markers: false
    })

    points.forEach(function (elem, i) {
      gsap.set(elem, { position: "absolute", top: 0 });
      if (i == 0) {
        tl.to(indicators[i], { backgroundColor: "#2e3430", duration: 0.25 }, i)
        tl.from(elem.querySelector('img'), { translateY: 0, ease: "Power2.easeInOut", }, i)

        tl.from(elem.querySelector('h1'), {
          autoAlpha: 1, y: 0, ease: "Power2.easeInOut"
        }, i)

        tl.from(elem.querySelector('p'), {
          autoAlpha: 1, y: 0, ease: "Power2.easeInOut"
        }, i)

      } else {
        tl.to(indicators[i], { backgroundColor: "#2e3430", duration: 0.25 }, i)
        tl.from(elem.querySelector('img'), { opacity: 0, translateY: 100, ease: "Power2.easeInOut" }, i)

        tl.from(elem.querySelector('h1'), {
          autoAlpha: 0, translateY: 100, ease: "Power2.easeInOut",
        }, i)

        tl.from(elem.querySelector('p'), {
          autoAlpha: 0, translateY: 100, ease: "Power2.easeInOut",
        }, i)
      }
      tl.add("label" + i);
      if (i != points.length - 1) {
        tl.to(indicators[i], { backgroundColor: "#fff", duration: 0.25 }, i + 0.75)

        tl.to(elem.querySelector('h1'), {
          autoAlpha: 0, translateY: -100, ease: "Power2.easeInOut",
        }, i + 0.75)

        tl.to(elem.querySelector('p'), {
          autoAlpha: 0, translateY: -100, ease: "Power2.easeInOut",
        }, i + 0.75)
        tl.to(elem.querySelector('img'), { ease: "Power2.easeInOut", }, i + 0.75)
      }

      // bottom div background color change here
      if (i == -1) { tl.to(bgStyle, { backgroundColor: "#9C7E61", }) }
      if (i == 0) { tl.to(bgStyle, { backgroundColor: "#4B5B47", }) }
      if (i == 1) { tl.to(bgStyle, { backgroundColor: "#6B4637", }) }
      if (i == 2) { tl.to(bgStyle, { backgroundColor: "#434F50", }) }
      if (i == 3) { tl.to(bgStyle, { backgroundColor: "#8B8458", }) }
      if (i == 4) { tl.to(bgStyle, { backgroundColor: "#8B8458", }) }

    });
  }, [])
  return (
    <div className="millglove-slider-section">
      <section className="philosophie">
        <div className="wrapper">
          <div className="indicators">
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
          </div>

          {/* <span className="notera-text-style">The</span> */}

          <div className="slide1 slide-sec point">
            <div className="slider-body">
              <figure className="img-box">
                <img src="/images/carousel-img-1.png" alt="" className="carousel-img" />
              </figure>
              <div className="carousel-text-div">
                <div className="heading-sec">
                  <h1 className="carousel-heading title1">Homes</h1>
                </div>
                <div className="carousel-subtext">
                  <p className="description">
                    Millgrove homes embrace grand proportions. They are flooded with
                    natural light and designed with sophisticated elegance and intricate
                    craftsmanship. With an abundance of flexible space within each
                    ‘shell & core’ home, you can finish the interior to suit your
                    personal needs and taste. It is a place to be yourself, on a scale
                    like no other.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-style"></div>
          </div>

          <div className="slide2 slide-sec point">
            <div className="slider-body">
              <figure className="img-box">
                <img src="/images/carousel-img-2.png" alt="" className="carousel-img" />
              </figure>
              <div className="carousel-text-div">
                <div className="heading-sec">
                  <h1 className="carousel-heading title1">Grounds</h1>
                </div>
                <div className="carousel-subtext">
                  <p className="description">
                    Millgrove homes embrace grand proportions. They are flooded with
                    natural light and designed with sophisticated elegance and intricate
                    craftsmanship. With an abundance of flexible space within each
                    ‘shell & core’ home, you can finish the interior to suit your
                    personal needs and taste. It is a place to be yourself, on a scale
                    like no other.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-style"></div>
          </div>

          <div className="slide3 slide-sec point">
            <div className="slider-body">
              <figure className="img-box">
                <img src="/images/carousel-img-3.png" alt="" className="carousel-img" />
              </figure>
              <div className="carousel-text-div">
                <div className="heading-sec">
                  <h1 className="carousel-heading title1">Comforts</h1>
                </div>
                <div className="carousel-subtext">
                  <p className="description">
                    Millgrove homes embrace grand proportions. They are flooded with
                    natural light and designed with sophisticated elegance and intricate
                    craftsmanship. With an abundance of flexible space within each
                    ‘shell & core’ home, you can finish the interior to suit your
                    personal needs and taste. It is a place to be yourself, on a scale
                    like no other.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-style"></div>
          </div>

          <div className="slide4 slide-sec point">
            <div className="slider-body">
              <figure className="img-box">
                <img src="/images/carousel-img-4.png" alt="" className="carousel-img" />
              </figure>
              <div className="carousel-text-div">
                <div className="heading-sec">
                  <h1 className="carousel-heading title1">LOCATION</h1>
                </div>
                <div className="carousel-subtext">
                  <p className="description">
                    Millgrove homes embrace grand proportions. They are flooded with
                    natural light and designed with sophisticated elegance and intricate
                    craftsmanship. With an abundance of flexible space within each
                    ‘shell & core’ home, you can finish the interior to suit your
                    personal needs and taste. It is a place to be yourself, on a scale
                    like no other.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-style"></div>
          </div>

          <div className="slide5 slide-sec point">
            <div className="slider-body">
              <figure className="img-box">
                <img src="/images/carousel-img-5.jpg" alt="" className="carousel-img" />
              </figure>
              <div className="carousel-text-div">
                <div className="heading-sec">
                  <h1 className="carousel-heading title1">Legacy</h1>
                </div>
                <div className="carousel-subtext">
                  <p className="description">
                    Millgrove homes embrace grand proportions. They are flooded with
                    natural light and designed with sophisticated elegance and intricate
                    craftsmanship. With an abundance of flexible space within each
                    ‘shell & core’ home, you can finish the interior to suit your
                    personal needs and taste. It is a place to be yourself, on a scale
                    like no other.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-style"></div>
          </div>
        </div>
      </section>

      <section className="vh"></section>
    </div>
  );
}

export default HomeCarousel;
