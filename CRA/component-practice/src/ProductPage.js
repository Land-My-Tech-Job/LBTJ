import ProductItem from './ProductItem';

const ProductPage = () => {

    // You can see here that we start our functional `ProductPage` component with an array of objects, each with certain consistent traits: `name`, `manufacturer`, and `price`.

    const products = [
        { name: "Ultra Boost", manufacturer: "Adidas", price: 160 },
        { name: "Air Force One Low", manufacturer: "Nike", price: 100 },
        { name: "Classic Leather", manufacturer: "Reebok", price: 120 },
        { name: "Sk8-Hi", manufacturer: "Vans", price: 60 }

    ];

    // We then then use this array to render our products in JSX:

    const listItems = products.map(product => {
        return (
            <ProductItem
                name={product.name}
                price={product.price}
            />
        );
    });

    return (
        <div>
            <ul>{listItems}</ul>
        </div>
    );
}

export default ProductPage