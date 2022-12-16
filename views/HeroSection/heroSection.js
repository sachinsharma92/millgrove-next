import gsap from "gsap";
import { useEffect } from "react";

/* eslint-disable @next/next/no-img-element */
function HeroSection() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".animation-block .animation-home-text", 1.4, {
      y: 100,
      ease: "power4.out",
      delay: 0.4,
      skewY: 0,
      stagger: {
        amount: 0.3
      },
      autoAlpha: 0,
    })
  }, [])

  return (
    <div className="hero-section-fold">
      <div className="mg-first-fold">
        <div className="mg-first-fold-text">
          <div>
            <div className="mg-first-fold-heading animation-block">
              <div className="animation-home-text">MEANINGFUL</div>
              <div className="animation-home-text">LIVING</div>
            </div>
            <div className="animation-block">
              <div className="mg-first-fold-subheading animation-home-text">
                Living at Millgrove transcends ordinary notions of luxury. It is
                a natural haven that gives you a complete sense of belonging. A
                place where you can nurture relationships and make time for what
                matters most.
              </div>
            </div>
          </div>
        </div>
        <a href="#madeWithCare" className="more-button">
          <div className="scroll-down">
            <img src="/images/arrow-down.svg" alt="" />
          </div>
          Discover more
        </a>
        <div className="mg-bg-video">
          <video
            playsInline
            autoPlay
            muted
            loop
            preload="none"
            className="lazy"
          >
            <source src="https://d3mpfpyoz2qtu3.cloudfront.net/pexels-kindel-media-7578555.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
