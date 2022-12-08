/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

function HomeCarousel() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray(".snappoint");

    function goToSection(i) {
      gsap.to(window, {
        scrollTo: { y: i * innerHeight, autoKill: false, ease: "Power3.easeInOut" },
        duration: 0.3
      });
    }

    ScrollTrigger.defaults({
      markers: false
    });

    sections.forEach((eachPanel, i) => {
      const mainAnim = gsap.timeline({ paused: true });

      ScrollTrigger.create({
        trigger: eachPanel,
        onEnter: () => goToSection(i)
      });

      ScrollTrigger.create({
        trigger: eachPanel,
        start: "bottom bottom",
        onEnterBack: () => goToSection(i)
      });
    });

    var points = gsap.utils.toArray('.point');
    var indicators = gsap.utils.toArray('.indicator');

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
        tl.from(elem.querySelector('img'), { autoAlpha: 1, translateY: 0 }, i)
        tl.from(elem.querySelector('article'), { autoAlpha: 1, translateY: 0 }, i)
      } else {
        tl.to(indicators[i], { backgroundColor: "#2e3430", duration: 0.25 }, i)
        tl.from(elem.querySelector('img'), { autoAlpha: 0, translateY: -100 }, i)
        tl.from(elem.querySelector('article'), { autoAlpha: 0, translateY: 100 }, i)
      }
      tl.add("label" + i);
      if (i != points.length - 1) {
        tl.to(indicators[i], { backgroundColor: "#fff", duration: 0.25 }, i + 0.75)
        tl.to(elem.querySelector('article'), { autoAlpha: 0, translateY: -100 }, i + 0.75)
        tl.to(elem.querySelector('img'), { autoAlpha: 0, translateY: -100 }, i + 0.75)
      }

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

          <div className="slide1 slide-sec point">
            <div className="slider-body">
              <figure className="img-box">
                <img src="/images/carousel-img-1.png" alt="" className="carousel-img" />
              </figure>
              <article className="carousel-text-div">
                <div className="carousel-heading title1"> <span className="notera-text-style">The</span> Homes</div>
                <div className="carousel-subtext description">
                  Millgrove homes embrace grand proportions. They are flooded with
                  natural light and designed with sophisticated elegance and intricate
                  craftsmanship. With an abundance of flexible space within each
                  ‘shell & core’ home, you can finish the interior to suit your
                  personal needs and taste. It is a place to be yourself, on a scale
                  like no other.
                </div>
              </article>
            </div>
          </div>

          <div className="slide1 slide-sec point">
            <div className="slider-body">
              <figure className="img-box">
                <img src="/images/carousel-img-2.png" alt="" className="carousel-img" />
              </figure>
              <article className="carousel-text-div">
                <div className="carousel-heading title1"> <span className="notera-text-style">The</span> Grounds</div>
                <div className="carousel-subtext description">
                  Millgrove homes embrace grand proportions. They are flooded with
                  natural light and designed with sophisticated elegance and intricate
                  craftsmanship. With an abundance of flexible space within each
                  ‘shell & core’ home, you can finish the interior to suit your
                  personal needs and taste. It is a place to be yourself, on a scale
                  like no other.
                </div>
              </article>
            </div>
          </div>

          <div className="slide1 slide-sec point">
            <div className="slider-body">
              <figure className="img-box">
                <img src="/images/carousel-img-3.png" alt="" className="carousel-img" />
              </figure>
              <article className="carousel-text-div">
                <div className="carousel-heading title1"> <span className="notera-text-style">The</span> Comforts</div>
                <div className="carousel-subtext description">
                  Millgrove homes embrace grand proportions. They are flooded with
                  natural light and designed with sophisticated elegance and intricate
                  craftsmanship. With an abundance of flexible space within each
                  ‘shell & core’ home, you can finish the interior to suit your
                  personal needs and taste. It is a place to be yourself, on a scale
                  like no other.
                </div>
              </article>
            </div>
          </div>

          <div className="slide1 slide-sec point">
            <div className="slider-body">
              <figure className="img-box">
                <img src="/images/carousel-img-4.png" alt="" className="carousel-img" />
              </figure>
              <article className="carousel-text-div">
                <div className="carousel-heading title1"> <span className="notera-text-style">The</span> LOCATION</div>
                <div className="carousel-subtext description">
                  Millgrove homes embrace grand proportions. They are flooded with
                  natural light and designed with sophisticated elegance and intricate
                  craftsmanship. With an abundance of flexible space within each
                  ‘shell & core’ home, you can finish the interior to suit your
                  personal needs and taste. It is a place to be yourself, on a scale
                  like no other.
                </div>
              </article>
            </div>
          </div>

          <div className="slide1 slide-sec point">
            <div className="slider-body">
              <figure className="img-box">
                <img src="/images/carousel-img-5.jpg" alt="" className="carousel-img" />
              </figure>
              <article className="carousel-text-div">
                <div className="carousel-heading title1"> <span className="notera-text-style">The</span> Legacy</div>
                <div className="carousel-subtext description">
                  Millgrove homes embrace grand proportions. They are flooded with
                  natural light and designed with sophisticated elegance and intricate
                  craftsmanship. With an abundance of flexible space within each
                  shell & core’ home, you can finish the interior to suit your
                  personal needs and taste. It is a place to be yourself, on a scale
                  like no other.
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeCarousel;
