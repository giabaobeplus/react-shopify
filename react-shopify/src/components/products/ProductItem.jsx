function ProductItem({ product, onDelete, onEdit }) {
    return (
        <div className="mb-3">
            <p>{product.name}</p>
            <button className="block" onClick={onEdit}>Edit</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    )
}

export default ProductItem;