import { MILLGROVE_LOGO } from "../../utils/assets";
import Image from "next/image";

function HomeCarousel() {
  return (
    <div className="millglove-slider-section">
      <div className="mg-first-fold-header" >
        <MILLGROVE_LOGO style={{ color: '#3A3723' }} />
      </div>

      <div className="mg-first-fold-top-text">
        <a href="www.haryanarera.gov.in">www.haryanarera.gov.in</a>
        <div>HRERA2020A0009</div>
      </div>
      <div className="slide1 slide-sec">
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
      </div>

      {/* <div className="slide2 slide-sec">
        <div className="slider-body">
          <div className="img-box">
            <img src={carouselImg2} alt="" className="carousel-img" />
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
      </div>

      <div className="slide3 slide-sec">
        <div className="slider-body">
          <div className="img-box">
            <img src={carouselImg3} alt="" className="carousel-img" />
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
      </div>

      <div className="slide4 slide-sec">
        <div className="slider-body">
          <div className="img-box">
            <img src={carouselImg1} alt="" className="carousel-img" />
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
      </div> */}
    </div>
  );
}

export default HomeCarousel;
