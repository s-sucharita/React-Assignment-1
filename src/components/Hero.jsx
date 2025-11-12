import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hero() {
      // Slider settings
  const settings = {
    dots: true,            // show small dots for navigation
    infinite: true,        // loop infinitely
    speed: 800,            // animation speed in ms
    slidesToShow: 1,       // only one slide visible at a time
    slidesToScroll: 1,
    autoplay: true,        // automatic sliding
    autoplaySpeed: 3000,   // time between slides (3 seconds)
    arrows: false,         // hide next/prev arrows 
    fade: true,            // smooth fade effect 
  };
return (
    <>
        <main>
            <section className = "w-100% h-[500px] overflow-hidden relative opacity-77">
                  <Slider {...settings}>
                <img className="w-full h-[400px] object-cover block" src="pictures/background.png" alt="hero image 1"
                />
                <img className="w-full h-[400px] object-cover block" src="pictures/OIP.webp" alt="hero image 2"
                />
                <img className="w-full h-[400px] object-cover block" src="pictures/R.jpeg" alt="hero image 3"
                />
                </Slider>
                 <div className="absolute inset-0 bg-black/30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
          <h4 className="text-white text-2xl md:text-4xl font-serif text-center px-4">
           Paithrika – A touch of tradition, a mark of elegance.
          </h4>  
           <button className="bg-yellow-600 text-black px-6 py-2 rounded-full hover:bg-yellow-700 transition">
    Explore Collection
  </button> 
        </div>
            </section>
        </main>
    </>
)
}

export default Hero