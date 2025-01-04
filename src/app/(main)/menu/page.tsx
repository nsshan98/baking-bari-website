import React from "react";

const MenuPage = () => {
  return (
    <div>
      <div className="relative min-h-11 bg-[url('/cover.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="p-4 relative flex flex-col justify-center items-center h-full">
          <h1 className="max-w-md text-center text-5xl text-white font-bold">
            Our Menu
          </h1>
          <p className="max-w-md text-white text-lg">
            Order our cakes and satisfy your cravings with every bite! Crafted
            with love and packed with flavor, our cakes are the perfect blend of
            indulgence and delight—made to match your sweetest desires.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
