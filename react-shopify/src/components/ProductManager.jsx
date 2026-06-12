import { useState } from "react";

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
        setProducts((prevProducts => (
            prevProducts.map(product => {
                if (product.id === id) {
                    return {
                        ...product,
                        name: "Updated Product"
                    }
                }
                return product;
            })
        )))
    }

    return (
        <>
            {products.map(product => (
                <div className="mb-3" key={product.id}>
                    <p>{product.name}</p>
                    <button className="block" onClick={() => handleDeleteProduct(product.id)}>Delete Product</button>
                    <button onClick={() => handleEditProduct(product.id)}>Edit Product</button>
                </div>
            ))}

            <input className="border block mb-3" value={productName} onChange = {(e) => setProductName(e.target.value)}/>
            <button onClick={handleAddProduct}>Add product</button>
        </>
    )
}

export default ProductManager;