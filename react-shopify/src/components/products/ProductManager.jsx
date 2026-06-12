import { useState } from "react";
import ProductItem from "./ProductItem";

function ProductManager() {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "iPhone"
        },
        {
            id: 2,
            name: "MacBook"
        }
    ]);
    const [productName, setProductName] = useState("");

    const handleAddProduct = () => {
        if (!productName.trim()) {
            return;
        }

        const newProduct = {
            id: Date.now(),
            name: productName.trim()
        }

        setProducts(prevProducts => [...prevProducts, newProduct]);
        setProductName("");
    }

    const handleDeleteProduct = (id) => {
        setProducts(prevProducts =>
            prevProducts.filter(product => product.id !== id)
        );
    }

    const handleEditProduct = (id) => {
        if (!productName.trim()) return;

        setProducts((prevProducts => (
            prevProducts.map(product => {
                if (product.id === id) {
                    return {
                        ...product,
                        name: productName.trim()
                    }
                }
                return product;
            })
        )))

        setProductName("");
    }

    return (
        <>
            {products.map(product => (
                <ProductItem
                    key={product.id}
                    product={product}
                    onEdit={() => handleEditProduct(product.id)}
                    onDelete={() => handleDeleteProduct(product.id)} />
            ))}

            <input className="border block mb-3" value={productName} onChange={(e) => setProductName(e.target.value)} />
            <button onClick={handleAddProduct}>Add product</button>
        </>
    )
}

export default ProductManager;