"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import category1 from "../../../../../public/category-slides/category1.jpg";
import category2 from "../../../../../public/category-slides/category2.jpg";
import category3 from "../../../../../public/category-slides/category3.jpg";
import category4 from "../../../../../public/category-slides/category4.jpg";
import category5 from "../../../../../public/category-slides/category5.jpg";
import category6 from "../../../../../public/category-slides/category6.jpg";

// import required modules
import Image from "next/image";
import SectionText from "@/components/SectionText";

const CategorySection = () => {
  const categoryItems = [
    {
      title: "Category Item",
      image: category1,
    },
    {
      title: "Category Item",
      image: category2,
    },
    {
      title: "Category Item",
      image: category3,
    },
    {
      title: "Category Item",
      image: category4,
    },
    {
      title: "Category Item",
      image: category5,
    },
    {
      title: "Category Item",
      image: category6,
    },
  ];

  return (
    <>
      <SectionText sectionHeader="Cake-tegory"></SectionText>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper min-h-fit"
      >
        {categoryItems.map((categoryItem, index) => (
          <SwiperSlide key={index}>
            <div>
              <Image
                src={categoryItem.image}
                alt={categoryItem.title}
                width={1000}
                height={1000}
              />
            </div>
            <div className="mt-2 text-lg">
              <p>{categoryItem.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CategorySection;
