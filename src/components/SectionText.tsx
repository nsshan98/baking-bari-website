import React from "react";

type SectionTextProps = {
  // sectionTitle: string;
  sectionHeader: string;
};

const SectionText = ({ sectionHeader }: SectionTextProps) => {
  return (
    <div>
      {/* <p>{sectionTitle}</p> */}
      <h3 className="text-4xl mb-4 pt-4 border-b-4 border-indigo-500 w-3/12 pb-2">
        {sectionHeader}
      </h3>
    </div>
  );
};

export default SectionText;
