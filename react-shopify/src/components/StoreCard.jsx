function StoreCard({ className, storeName, owner, products }) {
    const handleViewStore = (storeName) => {
        alert(`Viewing store: ${storeName}`);
    };

    return (
        <div className={className}>
            <p>Store Name: {storeName}</p>
            <p>Owner: {owner}</p>
            <p>Products: {products}</p>
            
            <button onClick={() => handleViewStore(storeName)}>
                View Store
            </button>
        </div>
    )   
}

export default StoreCard;