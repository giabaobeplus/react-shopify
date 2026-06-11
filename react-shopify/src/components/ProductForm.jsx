import { useState } from "react";

function ProductForm() {
    const [productName, setProductName] = useState('');

    return (
        <>
            <h1>Product Name: {productName}</h1>
            <input className="border" value={productName} onChange={(e) => setProductName(e.target.value)} />
        </>
    )
}

export default ProductForm;