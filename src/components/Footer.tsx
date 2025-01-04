import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-slate-600 text-sky-200 text-center text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
