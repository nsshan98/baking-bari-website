import React from "react";
import { Metadata } from "next";
import CategorySection from "./_components/CategorySection";
import PopularItemsSection from "./_components/PopularItemsSection";

export const metadata: Metadata = {
  title: "Home",
  description: "Meets Your Cravings",
};

const HomePage = () => {
  return (
    <div>
      {/* <CarouselSection /> */}
      <CategorySection />
      <PopularItemsSection />
    </div>
  );
};

export default HomePage;
