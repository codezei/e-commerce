function ProductGallery (props) {
    return (
        <div className="product-details__col product-gallery">
        <div className="product-gallery__thumbnail-wrap">
            <div className="product-gallery__thumbnail">
                <img src={`./images/${props.productInfo.img}`} alt="" className="product-gallery__thumbnail-img" />
            </div>
            <div className="product-gallery__thumbnail">
                <img src={`./images/${props.productInfo.img}`} alt="" className="product-gallery__thumbnail-img" />
            </div>
            <div className="product-gallery__thumbnail">
                <img src={`./images/${props.productInfo.img}`} alt="" className="product-gallery__thumbnail-img" />
            </div>
        </div>
        <div className="product-gallery__main">
            <img src={`./images/${props.productInfo.img}`} alt="" className="product-gallery__main-img" />
        </div>
    </div>
    )
}

export default ProductGallery;