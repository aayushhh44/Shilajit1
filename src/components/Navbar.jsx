import React from 'react';

const Navbar = () => {
  return (
 
      <div className='flex justify-center md:justify-end p-3 fixed bg-black items-center gap-2 md:gap-8 h-12  w-full left-0 top-0 z-40'>
        <a href='#main' className='text-sm text-nowrap cursor-pointer font-poppins text-gray-400 hover:border-b border-b-yellow-700'>Home</a>
        <a href='#product' className='text-sm font-poppins text-nowrap cursor-pointer text-gray-400 hover:border-b border-b-yellow-700'>Our Product</a>
        <a href='#faqs' className='text-sm font-poppins cursor-pointer text-nowrap text-gray-400 hover:border-b border-b-yellow-700'>FAQs</a>
        <a href='#reviews' className='text-sm font-poppins text-nowrap cursor-pointer text-gray-400 hover:border-b border-b-yellow-700'>Reviews</a>
        <a href='https://buy.stripe.com/5kA14k050a3Q5bycMM' className='text-sm font-poppins cursor-pointer text-gray-400 hover:border-b border-b-yellow-700'>Buy now</a>
      </div>
    
  );
};

export default Navbar;
