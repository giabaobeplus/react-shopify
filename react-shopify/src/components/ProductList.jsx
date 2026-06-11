function ProductList() {
    const products = [
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
    ];

    return (
        <>
            <h1>Product List</h1>
            {products.map(product => (
                <h2 key={product.id}>{product.name}</h2>
            ))}
        </>
    )
}

export default ProductList;