// conver the following into a class instead

import { Component } from "react"

// Functional Component
// const ProductItem = (props) => {
//     const { name, price } = props
    
//     return (
//         <li>
//             {name} - ${price}
//         </li>
//     )
// }
    
export default ProductItem

// Class Component
class ProductItem extends Component {
    constructor() {
        super()
    }

    render() {
        const { name, price } = this.props

        return (
            <li>
                {name} - ${price}
            </li>
        )
    }
}