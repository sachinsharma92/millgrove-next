import gsap from "gsap";
import { useEffect } from "react";

function Secondfold(props) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".animation-block .animation-secondfold", 1.4, {
      y: 100,
      ease: "power4.out",
      delay: 0.4,
      skewY: 0,
      stagger: {
        amount: 0.3
      },
      autoAlpha: 0,
      scrollTrigger: {
        trigger: '#madeWithCare',
        start: 'top bottom',
        markers: false
      },
    })
  }, [])
  return (
    <div className="mg-second-fold" id="madeWithCare">
      <div className="mg-second-fold-text">
        <div className="animation-block">
          <div className="mg-second-fold-heading animation-secondfold">
            Made <span>with</span> Care
          </div>
        </div>
        <div className="animation-block">
          <div className="mg-second-fold-subheading animation-secondfold">
            Our purpose has always been simple. To create somewhere we are proud
            to call home; somewhere to leave a fitting legacy. We warmly invite
            you to join our small, peaceful community, where neighbours are
            friends. Welcome to Millgrove - a private collection of homes nestled
            in the heart of Gurugram.
          </div>
        </div>
        <div className="animation-block">
          <div className="mg-second-fold-footer animation-secondfold">Millgrove</div>
        </div>
      </div>
    </div>
  );
}

export default Secondfold;
