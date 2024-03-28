import React from 'react';

const Footer = () => {
  const current = new Date()
  return(
  <div className="mt-24">
    <p className="dark:text-gray-200 text-gray-700 text-center m-20">
      © {current.getFullYear()} All rights reserved by LunarShoppy
    </p>
  </div>
);
}
export default Footer;