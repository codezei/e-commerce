import "./CatalogList.scss"
import React from 'react'
import Pagination from "./Pagination"


function CatalogList (props) {


    
    let allProducts = props.products.map((product)=>{
        return (
            (props.activeCategory === "" || props.activeCategory === product.category) && (props.activeBrand === "" || props.activeBrand === product.brand) && (product.price >= props.minMaxValue[0] && product.price <= props.minMaxValue[1]) ?
            <div className="catalog-list__item catalog-item" key={`${product.id}-week`}>
                <div className="catalog-item__top">
                    <img src={`/${product.img}`} alt="" className="catalog-item__img" />
                    <div className="catalog-item__nav">
                        <button className="catalog-item__btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                                <path fill="#a3bbc8" fillRule="evenodd" d="M759.45,1579.8l-4.588-4.59a8.827,8.827,0,0,1-2.651,2.65l4.588,4.59A1.874,1.874,0,0,0,759.45,1579.8Zm-4.45-9.3a7.5,7.5,0,1,0-7.5,7.5A7.5,7.5,0,0,0,755,1570.5Zm-7.5,5.62a5.625,5.625,0,1,1,5.625-5.62A5.628,5.628,0,0,1,747.5,1576.12Zm-4.375-5.62h1.25a3.135,3.135,0,0,1,3.125-3.13v-1.25A4.386,4.386,0,0,0,743.125,1570.5Z" transform="translate(-740 -1563)" />
                            </svg>
                        </button>
                        <button className="catalog-item__btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width={22} height={20} viewBox="0 0 22 20">
                            <path fill="#a3bbc8" fillRule="evenodd" d="M800.814,1564.63h2.333l3.323,12.04a0.812,0.812,0,0,0,.787.59h10.214a0.821,0.821,0,0,0,.746-0.48l3.717-8.56a0.836,0.836,0,0,0-.068-0.78,0.813,0.813,0,0,0-.678-0.37H809.9a0.82,0.82,0,0,0,0,1.64H819.94l-3.011,6.92h-9.062l-3.323-12.03a0.808,0.808,0,0,0-.787-0.6h-2.943A0.815,0.815,0,0,0,800.814,1564.63Zm5.67,18.37a1.85,1.85,0,1,0-1.845-1.85A1.85,1.85,0,0,0,806.484,1583Zm11.53,0h0.135A1.907,1.907,0,1,0,818.014,1583Z" transform="translate(-800 -1563)" />
                        </svg>
                        </button>
                        <button className="catalog-item__btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width={22} height={18} viewBox="0 0 22 18">
                            <path fill="#a3bbc8" fillRule="evenodd" d="M882.99,1569.82a6.208,6.208,0,0,0-1.849-4.1A5.871,5.871,0,0,0,877,1564c-2.311,0-3.948,1.78-4.827,2.74a2.156,2.156,0,0,1-.156.17l-0.083-.09c-0.8-.92-2.476-2.82-4.938-2.82a5.873,5.873,0,0,0-4.139,1.72,6.208,6.208,0,0,0-1.849,4.1,6.845,6.845,0,0,0,1.271,4.34,29.307,29.307,0,0,0,4.763,4.75c1.705,1.41,3.95,3.09,4.965,3.09,1.032,0,3.269-1.68,4.965-3.09a29.234,29.234,0,0,0,4.746-4.75A6.935,6.935,0,0,0,882.99,1569.82Zm-2.376,3.61a27,27,0,0,1-4.431,4.42c-2.406,2-3.831,2.79-4.172,2.82-0.342-.03-1.77-0.83-4.188-2.84a26.78,26.78,0,0,1-4.437-4.4,5.6,5.6,0,0,1-1.054-3.54,4.807,4.807,0,0,1,4.666-4.57c1.863,0,3.216,1.54,3.943,2.37a1.52,1.52,0,0,0,1.059.76,1.731,1.731,0,0,0,1.151-.81c0.794-.87,2.122-2.32,3.851-2.32a4.807,4.807,0,0,1,4.666,4.57A5.528,5.528,0,0,1,880.614,1573.43Z" transform="translate(-861 -1564)" />
                        </svg>
                        </button>
                    </div>
                </div>
                <h3 className="catalog-item__name">
                        {product.name}
                </h3>

                <h4 className="catalog-item__price">
                &#36; {` ${product.price.toFixed(2)}`}
                </h4>

            </div>
            : ""
        )
    })

    let productsWithoutEmpty = allProducts.filter((item)=>{
        return !!item
    })
    
    let productsOfPage = productsWithoutEmpty.filter((item, index)=>{
        return !!item && (((index + 1) <= props.rangePage) && ((index) >= (props.rangePage - props.rangeMax)))
    })

    function correctPageNumber () {
        if (productsOfPage.length === 0 && (!!props.activeCategory || !!props.activeBrand)) {
            props.setPageNumber(Math.ceil(productsWithoutEmpty.length / props.rangeMax) )
            props.setRangePage(Math.ceil(productsWithoutEmpty.length / props.rangeMax) * props.rangeMax)
        }
    }
    

    React.useEffect(()=>{
        correctPageNumber()
    }, [productsWithoutEmpty])


    return (
        <React.Fragment>
            <div className="catalog-list">
                {
                    [...productsOfPage]
                }
            </div>
            
            <Pagination 
                rangeMax={props.rangeMax} 
                setRangePage={props.setRangePage} 
                pageNumber={props.pageNumber} 
                setPageNumber={props.setPageNumber}
                productsWithoutEmpty={productsWithoutEmpty} 
            >
                
            </Pagination>
        </React.Fragment>

    )
}

export default CatalogList;