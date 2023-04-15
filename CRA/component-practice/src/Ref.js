// import React, { Component } from 'react';

// class UserProfile extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userData: null,
//     };
//   }

//   componentDidMount() {
//     this.fetchUserData(this.props.userId);
//   }

//   componentDidUpdate(prevProps) {
//     if (this.props.userId !== prevProps.userId) {
//       this.fetchUserData(this.props.userId);
//     }
//   }

//   fetchUserData(userId) {
//     // Fetch user data from an API or other data source using the given userId
//     // and update the component's state with the fetched data
//     fetch(`/api/users/${userId}`)
//       .then((response) => response.json())
//       .then((userData) => this.setState({ userData }));
//   }

//   render() {
//     const { userData } = this.state;
//     return (
//       <div>
//         {userData ? (
//           <div>
//             <h1>{userData.name}</h1>
//             <p>{userData.bio}</p>
//           </div>
//         ) : (
//           <p>Loading...</p>
//         )}
//       </div>
//     );
//   }
// }

// export default UserProfile;




// const UserProfile = (props) => {
//   const { name, age, location } = props
//   return (
//   <ul>
//     <li>Name: {name}</li>
//     <li>Age: {age}</li>
//     <li>Location: {location}</li>
//   </ul>
//   )
// }
  
// export default UserProfile

// // import ProductPage from './ProductPage'
// // const App = () => {
// //     return <ProductPage />
// // }
// // export default App


// import User from './User'
// const App = () => {
//   let userDetails = [{
//     name: "Jimmy Dean",
//     userId: 7452,
//     email: "jimmydean@fake.org"
//   },
//   {
//     name: "john smith",
//     userId: 7453,
//     email: "johnsmith@fake.org"
//   },
//   {
//     name: "Jim bo",
//     userId: 7452,
//     email: "jimbo@fake.org"
//   }]

//   const userList = userDetails.map((user) => {
//     return <User 
//             name={user.name} 
//             userId={user.userId} 
//             email={user.email}
//           />
//   })

//   return <div>{userList}</div>
// }

// // export default App



// /*
//     Here's one class and one functional component as examples. Convert the class component to a functional one, and convert the functional component to a class component.
// Before you start the refactor:

// Copy the entire code snippet into your App.js component
// run npm start to look at what the component renders in your browser
// Take note of what it looks like!
// Do your refactor, using the original starting point as a guideline.

// */
// import { Component } from 'react'
// class BookList extends Component {
//   constructor() {
//     super()

//     this.titles = ["moby dick", "the great gatsby", "of mice and men"]
//   }

//   render() {
//     return <>
//       <ul className="book-titles">
//       {this.titles.map(title => <li>{title}</li>)}
//       </ul>
//     </>
//   }
// }

// const BookList = () => {
//   const titles = ["moby dick", "the great gatsby", "of mice and men"]

//   return (
//     <ul className="book-titles">
//       {titles.map(title => <li>{title}</li>)}
//     </ul>
//   )
// }

// export default BookList


// // function Card() {
// //   const cardTitle = "Song Info"
// //   const author = "Andrew Bird"
// //   const songTitle = "Danse Caribe"
// //   const description = "A wonderful song off of the album 'Break it yourself'"
  
// //   return (
// //   <div className="card">
// //     <h1 className="card-title">{cardTitle}</h1>
// //     <h2 className="author-title">{author} - {songTitle}</h2>
// //     <p>{description}</p>
// //   </div>
// //   )
// // }

// // import { Component } from 'react'
// // class Card extends Component {
// //   constructor () {
// //     super()
// //     this.cardTitle = "Song Info"
// //     this.author = "Andrew Bird"
// //     this.songTitle = "Danse Caribe"
// //     this.description = "A wonderful song off of the album 'Break it yourself'"
// //   }

// //   render() {
// //     return (
// //         <div className="card">
// //           <h1 className="card-title">{cardTitle}</h1>
// //           <h2 className="author-title">{author} - {songTitle}</h2>
// //           <p>{description}</p>
// //         </div>
// //     )
// //   }
// // }
// // export default Card