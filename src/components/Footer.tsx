import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-slate-600 text-sky-200 text-center p-4">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </footer>
    </div>
  );
};

export default Footer;
