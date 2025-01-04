"use client";
import SectionText from "@/components/SectionText";
import React, { useEffect, useState } from "react";
import PopularItemsList from "./PopularItemsList";

const PopularItemsSection = () => {
  const [popularMenu, setPopularMenu] = useState([]);
  useEffect(() => {
    fetch("allCakes.json")
      .then((res) => res.json())
      .then((data) => setPopularMenu(data));
  }, []);
  return (
    <section>
      <SectionText sectionHeader="Popular Items"></SectionText>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {popularMenu.map((popular, index) => (
          <PopularItemsList key={index} popular={popular}></PopularItemsList>
        ))}
      </div>
    </section>
  );
};

export default PopularItemsSection;
