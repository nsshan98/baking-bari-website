"use client";
import SectionText from "@/components/SectionText";
import PopularItemsList from "./PopularItemsList";
import { useShowMenuItem } from "@/hooks/custom/menuQuery";

const PopularItemsSection = () => {
  const { showMenuItem } = useShowMenuItem();
  console.log(showMenuItem.data);

  return (
    <section>
      <SectionText sectionHeader="Popular Items"></SectionText>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {showMenuItem.data?.map((popularItem, index) => (
          <PopularItemsList
            key={index}
            popularItem={popularItem}
          ></PopularItemsList>
        ))}
      </div>
    </section>
  );
};

export default PopularItemsSection;
