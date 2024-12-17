// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import image7 from "../assets/testomonials/8.jpg";
import image2 from "../assets/testomonials/2.jpg";
import image3 from "../assets/testomonials/3.jpg";
import image4 from "../assets/testomonials/4.jpg";
import image6 from "../assets/testomonials/5.jpg";
import image5 from "../assets/testomonials/6.jpg";

// Testimonials data
const testimonials = [
    {
        id: 1,
        image: image7,
        text: "Working with this team has been an absolute pleasure. Their expertise and attention to detail made the entire process seamless. From the initial consultation to the final delivery, they exceeded my expectations. I would highly recommend their services to anyone looking for quality and professionalism!",
        client: "John David",
        rating: 5,
    },
    {
        id: 2,
        image: image2,
        text: "Working with this team has been an absolute pleasure. Their expertise and attention to detail made the entire process seamless. From the initial consultation to the final delivery, they exceeded my expectations. I would highly recommend their services to anyone looking for quality and professionalism!",
        client: "Sarah Wills",
        rating: 4,
    },
    {
        id: 3,
        image: image3,
        text: "Working with this team has been an absolute pleasure. Their expertise and attention to detail made the entire process seamless. From the initial consultation to the final delivery, they exceeded my expectations. I would highly recommend their services to anyone looking for quality and professionalism!",
        client: "Emily Gibson",
        rating: 5,
    },
    {
        id: 4,
        image: image4,
        text: "Working with this team has been an absolute pleasure. Their expertise and attention to detail made the entire process seamless. From the initial consultation to the final delivery, they exceeded my expectations. I would highly recommend their services to anyone looking for quality and professionalism!",
        client: "Jessica Lerna",
        rating: 4,
    },
    {
        id: 5,
        image: image5,
        text: "Working with this team has been an absolute pleasure. Their expertise and attention to detail made the entire process seamless. From the initial consultation to the final delivery, they exceeded my expectations. I would highly recommend their services to anyone looking for quality and professionalism!",
        client: "Amanda Rodes",
        rating: 5,
    },
    {
        id: 6,
        image: image6,
        text: "Working with this team has been an absolute pleasure. Their expertise and attention to detail made the entire process seamless. From the initial consultation to the final delivery, they exceeded my expectations. I would highly recommend their services to anyone looking for quality and professionalism!",
        client: "Tessa Ford",
        rating: 5,
    },
];

const TestimonialsSection = () => {
    const settings = {
        dots: false, // Disable pagination dots
        arrows: false, // Disable navigation arrows inside the slider
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

    let slider;

    const handlePrevClick = () => {
        slider.slickPrev();
    };

    const handleNextClick = () => {
        slider.slickNext();
    };

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4 lg:px-8 text-center">
                <h2 className="text-4xl md:text-4xl font-bold mb-6 text-left">
                    <span className="text-text-light">What </span>
                    <span className="text-text-dark">Our Client Say</span>
                </h2>

                {/* Testimonials Slider */}
                <Slider {...settings} ref={(sliderRef) => (slider = sliderRef)}>
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="p-6 mx-4 bg-white rounded-lg shadow-md space-y-4 transform transition-all hover:scale-105 hover:shadow-xl hover:rotate-2"
                        >
                            <img
                                src={testimonial.image}
                                alt={`${testimonial.client}'s avatar`}
                                className="w-50 h-50 mx-auto mb-4 rounded-full"
                            />
                            <p className="italic mb-2">"{testimonial.text}"</p>
                            <div className="flex justify-center mb-4">
                                {[...Array(testimonial.rating)].map((_, idx) => (
                                    <FaStar key={idx} className="text-yellow-500"/>
                                ))}
                            </div>
                            <p className="font-bold">- {testimonial.client}</p>
                        </div>
                    ))}
                </Slider>

                {/* Arrows below the slider */}
                <div className="flex justify-center mt-6">
                    <button
                        onClick={handlePrevClick}
                        className="text-gray-600 text-3xl mx-4 cursor-pointer"
                    >
                        <FaArrowLeft/>
                    </button>
                    <button
                        onClick={handleNextClick}
                        className="text-gray-600 text-3xl mx-4 cursor-pointer"
                    >
                        <FaArrowRight/>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
