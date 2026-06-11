import { useEffect } from "react";

function ProductPage() {
    

    useEffect(() => {
        alert('Loading Products...')
    }, [])

    return (
        <>
            <h1>Products Page</h1>
        </>
    )
}

export default ProductPage;