import Slider from "react-slick";

// Import partner logos
import Partner1 from "../assets/img/partner1.png";
import Partner2 from "../assets/img/partner2.png";
import Partner3 from "../assets/img/partner3.png";
import Partner4 from "../assets/img/partner4.png";

const PartnerCarousel = () => {
    const settings = {
        dots: false, // Disable pagination dots
        arrows: false, // Disable navigation arrows
        infinite: true, // Enable infinite scrolling
        autoplay: true, // Enable auto-slide
        autoplaySpeed: 3000, // Set auto-slide speed (3000ms = 3 seconds)
        speed: 500, // Transition speed between slides
        slidesToShow: 3, // Number of slides visible at once
        slidesToScroll: 3, // Number of slides to scroll per swipe or auto-slide
        responsive: [
          {
            breakpoint: 768, // For tablets
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2, // Scroll exactly 2 slides on smaller screens
            },
          },
          {
            breakpoint: 480, // For mobile devices
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1, // Scroll exactly 1 slide on smaller screens
            },
          },
        ],
      };
      
  return (
    <div className=" w-full py-10">
      <Slider {...settings}>
        {/* Partner Logos */}
        <div className="flex justify-center px-16 "> {/* Added px-2 for spacing */}
          <img
            src={Partner1}
            alt="Partner 1 Logo"
            className="h-16 object-contain"
          />
        </div>
        <div className="flex justify-center px-16 "> {/* Added px-2 for spacing */}
          <img
            src={Partner2}
            alt="Partner 2 Logo"
            className="h-16 object-contain"
          />
        </div>
        <div className="flex justify-center px-16 "> {/* Added px-2 for spacing */}
          <img
            src={Partner3}
            alt="Partner 3 Logo"
            className="h-16 object-contain"
          />
        </div>

        <div className="flex justify-center px-16 "> {/* Added px-2 for spacing */}
          <img
            src={Partner4}
            alt="Partner 3 Logo"
            className="h-16 object-contain"
          />
        </div>
      </Slider>
    </div>
  );
};

export default PartnerCarousel;
