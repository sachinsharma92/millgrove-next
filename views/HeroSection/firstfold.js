// Assets
import Image from "next/image";

function HeroSection() {

  return (
    <div className="hero-section-fold">
      <div className="mg-first-fold">
        <div className="mg-first-fold-text">
          <div>
            <div className="mg-first-fold-heading animation-block">
              <div className="animation-text">
                MEANINGFUL
              </div>
              <div className="animation-text">
                LIVING
              </div>
            </div>
            <div className="animation-block">
              <div
                className="mg-first-fold-subheading animation-text">
                Living at Millgrove transcends ordinary notions of luxury. It is a
                natural haven that gives you a complete sense of belonging. A place
                where you can nurture relationships and make time for what matters
                most.
              </div>
            </div>
          </div>
        </div>
        <a href="#madeWithCare" className="more-button">
          <div className="scroll-down">
            <Image src="/images/arrow-down.svg" alt="" layout="fill" />
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
            poster="https://pixabay.com/images/id-3822149/"
          >
            <source
              src="/videos/bg.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>

  );
}

export default HeroSection;
