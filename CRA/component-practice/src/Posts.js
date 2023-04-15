// import React, { useState, useEffect } from 'react';
// import axios from 'axios'

// const useFetchData = async (url) => {
//     // const [data, setData] = useState([]);
//     // const [loading, setLoading] = useState(true);
//     // const [error, setError] = useState(null);
  
//     // useEffect(() => {
//     //   const fetchData = async () => {
//     //     setLoading(true);
//     //     try {
//     //       const response = await fetch(url);
//     //       if (!response.ok) {
//     //         throw new Error(`Error: ${response.status}`);
//     //       }
//     //       const data = await response.json();
//     //       setData(data);
//     //     } catch (error) {
//     //       setError(error.message);
//     //     } finally {
//     //       setLoading(false);
//     //     }
//     //   };
  
//     //   fetchData();
//     // }, [url]);
  
//     // return { data, loading, error };    
//     // console.log('*************************')
//     // const response = await axios({
//     //     method: 'get',
//     //     url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
//     //     headers: {
//     //         accept: 'application/json',
//     //         'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
//     //         'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
//     //     }
//     //   })
//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
//             'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
//         }
//     };
    
//     const data = await fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', options)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));
//     const res = await data
//     // const data = await response
//     // console.log(`response`, data)
//     return { res }
// };
  
//   const Posts = () => {
//     const { data } = useFetchData('https://jsonplaceholder.typicode.com/posts');
  
//     return (
//       <ul>
//           <li>
//             <button>facts</button>
//             {/* <p>{post.body}</p> */}
//           </li>
//       </ul>
//     );
//   };

//   export default Posts;