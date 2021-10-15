import React from 'react'



function ProductGallery (props) {
    let [activeImg, setActiveImg] = React.useState('img-0')
    let [images, setImages] = React.useState(0)
    React.useEffect(()=>{
        setImages(props.productInfo.images)
    }, [props.productInfo])
    return (
        <div className="product-details__col product-gallery">
        <div className="product-gallery__thumbnail-wrap">
            {
                !!images ? 
                images.map((item, index)=>{
                    return (
                        <div className={`product-gallery__thumbnail ${'img-'+index === activeImg ? 'product-gallery__thumbnail--active' : ''}`} key={`thumbnail-${index}`} id={`img-${index}`} onClick={(e)=>{
                            setActiveImg(e.target.id || e.target.parentElement.id)
                        }}>
                            <img src={`${process.env.PUBLIC_URL}/images/${item}`} alt="" className="product-gallery__thumbnail-img"  />
                        </div>
                    )
                })
                :
                ""
            }
        </div>
        <div className="product-gallery__main">
           {    !!images ? 
                images.map((item, index)=>{
                    return (
                        activeImg === 'img-'+index ? 
                        <img src={`${process.env.PUBLIC_URL}/images/${item}`} alt="" className="product-gallery__main-img" key={`main-img-${index}`}/>
                        :
                        ""
                    )
                })
                :
                ""
           }
        </div>
    </div>
    )
}

export default ProductGallery;