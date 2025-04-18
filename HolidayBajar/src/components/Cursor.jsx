// import React, { useEffect, useRef } from 'react';
// import "../style/cursor.css";

// const Cursor = () => {
//   const cursorRef = useRef(null);

//   useEffect(() => {
//     const moveCursor = (e) => {
//       if (cursorRef.current) {
//         cursorRef.current.style.left = e.pageX + 'px';
//         cursorRef.current.style.top = e.pageY + 'px';
//       }
//     };

//     document.addEventListener('mousemove', moveCursor);
//     return () => document.removeEventListener('mousemove', moveCursor);
//   }, []);

//   return <div className="cursor" ref={cursorRef}></div>;
// };

// export default Cursor;
