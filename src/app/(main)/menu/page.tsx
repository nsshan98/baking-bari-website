import React from "react";
import cover from "../../../../public/cover.jpg";

const MenuPage = () => {
  return (
    <div>
      <div className="hero min-h-fit bg-[url('/cover.jpg')] bg-cover bg-center">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text text-5xl font-bold">Our Menu</h1>
            <p className="mb-5">
              Order our cakes and satisfy your cravings with every bite! Crafted
              with love and packed with flavor, our cakes are the perfect blend
              of indulgence and delight—made to match your sweetest desires.
            </p>
          </div>
        </div>
      </div>

      <div role="tablist" className="tabs tabs-bordered">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Tab 1"
        />
        <div role="tabpanel" className="tab-content p-10">
          Tab content 1
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Tab 2"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content p-10">
          Tab content 2
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Tab 3"
        />
        <div role="tabpanel" className="tab-content p-10">
          Tab content 3
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
