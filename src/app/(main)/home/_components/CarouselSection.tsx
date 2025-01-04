"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import slider1 from "../../../../public/carousel/img1.jpg";
import slider2 from "../../../../public/carousel/img2.jpg";
import slider3 from "../../../../public/carousel/img3.jpg";

const CarouselSection = () => {
  const carouselItems = [
    {
      title: "Two Tier Cake",
      image: slider1,
    },
    {
      title: "Two Tier Cake",
      image: slider2,
    },
    {
      title: "Two Tier Cake",
      image: slider3,
    },
  ];
  return (
    <div>
      <Carousel infiniteLoop autoPlay interval={3000} showStatus={false}>
        {carouselItems.map((carouselItem, index) => (
          <div key={index}>
            <Image
              src={carouselItem.image}
              alt={carouselItem.title}
              width={1000}
              height={100}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselSection;
