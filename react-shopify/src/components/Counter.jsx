import { useState } from "react";

function Counter() {
    const [products, setProducts] = useState(120);
    const handleAddProduct = () => {
        setProducts((prevProducts) => prevProducts + 1);
    };

    return (
        <>
            <h1>Products: {products}</h1>
            <button onClick={handleAddProduct}>Add Product</button>
        </>
    )
}

export default Counter;