import './App.css';
import Cards from './components/Cards';
import ImageBoxFirst from './components/ImageGalary';
import ImageBoxTwo from './components/ImageBoxTwo';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Slider from './components/Slider';
import ImgGalary from './components/ImgGalary';
import Footer from './components/Footer';
import ContentBoxTwo from './components/ContntBox2';
import ContentBoxThree from './components/ContentBox3';
import ContentBoxFour from './components/ContentBoxFour';
import Galary from './components/Galary';
import ContentBoxFive from './components/ContentBoxFive';
import React, { useEffect, useRef, useState } from 'react';
import PopularBox from './components/PopularHotels';
import ImageBoxFirst_v2 from './components/ImageBoxFirst_v2';

function App() {
  const cursorRef = useRef(null);
  const [hoveringText, setHoveringText] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseOver = (e) => {
      const isText =
        e.target.tagName === 'A' ||
        e.target.tagName === 'P' ||
        e.target.tagName === 'SPAN' ||
        e.target.tagName === 'H1' ||
        e.target.tagName === 'H2' ||
        e.target.tagName === 'H3' ||
        e.target.tagName === 'H4' ||
        e.target.tagName === 'H5' ||
        e.target.tagName === 'H6' ||
        e.target.tagName === 'BUTTON';

      setHoveringText(isText);
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        className={`cursor ${hoveringText ? 'cursor-hover' : ''}`}
        ref={cursorRef}
      ></div>

      <Navbar />
      <Slider />
      <Services />
      <Cards />
      <ContentBoxTwo />
      <ImageBoxFirst />
      <ContentBoxThree />
      <ImageBoxFirst_v2/>
      <ContentBoxFour />
      <ImageBoxTwo />
      <Galary />
      <ImgGalary />
      <ContentBoxFive />
      <PopularBox/>
      <Footer />
    </>
  );
}

export default App;
