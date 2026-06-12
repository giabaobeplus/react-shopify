import { useEffect, useState } from "react";

function ProductPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setProducts([
                {
                    id: 1,
                    name: "iPhone"
                },
                {
                    id: 2,
                    name: "MacBook"
                },
                {
                    id: 3,
                    name: "iPad"
                }
            ]);
        }, 3000);
    }, [])

    return (
        <>
            {products.length === 0 ? "Loading..." : products.map((product) => (
                <h1 key={product.id}>{product.name}</h1>
            ))}
        </>
    )
}

export default ProductPage; 