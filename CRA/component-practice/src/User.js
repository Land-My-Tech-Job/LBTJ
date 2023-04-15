import {Component} from "react"

class UserProfile extends Component {
    render() {
        const { name, age, location } = this.props
        return (
            <ul>
                <li>Name: {name}</li>
                <li>Age: {age}</li>
                <li>Location: {location}</li>
            </ul>
        )
    }
}

export default ProductItem

// const User = (props) => {

//     const { name } = props // props.name
//     const { userId } = props // props.userId
//     const { email } = props // props.email
    
//     return (
//         <div className="user-details">
//             <h1>{name}</h1>
//             <h2>{userId}</h2>
//             <h3>{email}</h3>
//         </div>
//     )
// }

// export default User