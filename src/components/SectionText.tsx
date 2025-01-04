import React from "react";

type SectionTextProps = {
  // sectionTitle: string;
  sectionHeader: string;
};

const SectionText = ({ sectionHeader }: SectionTextProps) => {
  return (
    <div>
      {/* <p>{sectionTitle}</p> */}
      <h3 className="text-md sm:text-4xl md:text-4xl mb-4 pt-4 border-b-4 border-indigo-500 w-5/12 md:w-1/5 pb-2">
        {sectionHeader}
      </h3>
    </div>
  );
};

export default SectionText;
