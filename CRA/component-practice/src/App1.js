import React, { useState, useEffect } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      <h1>Counter App with React Hooks</h1>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>-</button>
      <button onClick={() => setCounter(counter - 1)}>+</button>
      <h2>Width: {width}</h2>
    </div>
  );
}

export default App;

// import { 
//     BrowserRouter, 
//     Route, 
//     Routes 
// } from 'react-router-dom';
// import {
//     Layout,
//     Home,
//     About,
//     Contact
// } from './pages/index'

// const App = () => {
//   //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         <Route path="/" element={<Layout />}>
// //           <Route index element={<Home />} />
// //           <Route path="about" element={<About />} />
// //           <Route path="contact" element={<Contact />} />
// //         </Route>
// //       </Routes>
// //     </BrowserRouter>
// //   );
//   return ( 
//         <BrowserRouter>
//          <Routes>
//            <Route path="/" element={<Layout />}>
//              <Route index element={<Home />} />
//              <Route path="about" element={<About />} />
//              <Route path="contact" element={<Contact />} />
//            </Route>
//          </Routes>
//        </BrowserRouter>
//   )
// }

// export default App

// import Posts from "./Posts";


// function App() {
//   return (
//     <div className="App">
//       <h1>Posts</h1>
//       <Posts />
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import { 
//     BrowserRouter, 
//     Route, 
//     Routes 
// } from 'react-router-dom';
// import {
//     Layout,
//     Home,
//     About,
//     Contact
// } from './pages/index'

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="contact" element={<Contact />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;