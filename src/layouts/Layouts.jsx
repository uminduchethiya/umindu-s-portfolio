import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Layouts = ({ children }) => {
  
  // Disable right-click functionality
  // useEffect(() => {
  //   const disableRightClick = (event) => {
  //     event.preventDefault();
  //   };

  //   // Attach the event listener on mount
  //   document.addEventListener('contextmenu', disableRightClick);

  //   // Cleanup the event listener on unmount
  //   return () => {
  //     document.removeEventListener('contextmenu', disableRightClick);
  //   };
  // }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className='md:mt-16 mt-16'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layouts;
