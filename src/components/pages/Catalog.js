
import PageTitle from "../PageTitle"
import {connect} from 'react-redux'
import React from 'react'
import FilterCategory from "../FilterCategory"
import FilterBrand from "../FilterBrand"
import CatalogList from "../CatalogList"
import FilterPrice from "../FilterPrice"
import "./Catalog.scss"




function Catalog (props) {
    const rangeMax = 12
    let [categories, setCategories] = React.useState([])
    let [brands, setBrands] = React.useState([])
    let [activeCategory, setActiveCategory] = React.useState("")
    let [activeBrand, setActiveBrand] = React.useState("")
    let [maxMinPrice, setMaxMinPrice] = React.useState(0)
    let [minMaxValue, setMinMaxValue] = React.useState([0, 100])
    let [pageNumber, setPageNumber] = React.useState(1)
    let [rangePage, setRangePage] = React.useState(pageNumber * rangeMax)




    React.useEffect(()=>{
        setMaxMinPrice(getMinMaxPrice(activeCategory, activeBrand))
        setMinMaxValue(getMinMaxPrice(activeCategory, activeBrand))
        setCategories(getUniqueCategory(activeBrand))
        setBrands(getUniqueBrand(activeCategory))
        
        
    }, [])



    function getUniqueCategory (brand) {
        let arr = []
        props.products.forEach(item=>{
            if ((brand === "" || brand === item.brand)) {
                arr.push(item.category) 
            }
        })
        let res = []
        arr.forEach(item=>{
            if (!res.includes(item)) {
                res.push(item)
            }
        })
        return res
    }
    function getUniqueBrand (category) {
        console.log(minMaxValue)
        let arr = []
        props.products.forEach(item=>{
            if ((category === "" || category === item.category)) {
                arr.push(item.brand) 
            }
        })
        let res = []
        let res2 = []
        arr.forEach(item=>{
            if (!res.includes(item)) {
                res.push(item)
                res2.push({
                    brandName: item,
                    brandCount: 1
                })
            } else if (res.includes(item)) {
                res2.forEach(elem=>{
                    if (elem.brandName === item) {
                        elem.brandCount = elem.brandCount + 1
                    }
                })
            }
        })
        return res2
    }
    function getMinMaxPrice(category, brand) {
        let arr = [props.products[0].price, props.products[0].price]
        props.products.forEach(item=>{
            if((item.price < arr[0]) && (brand === "" || brand === item.brand) && (category === "" || category === item.category)) {
                arr[0] = item.price
            } else if ((item.price > arr[1]) && (brand === "" || brand === item.brand) && (category === "" || category === item.category)) {
                arr[1] = item.price
            } 

        }) 
        return arr 
    }
    // function getCountProducts (category, brand, price) {
    //     let count = 0
    //     props.products.forEach((product)=>{
            
    //        if ((category === "" || category === product.category) && (brand === "" || brand === product.brand) && (product.price >= price[0] && product.price <= price[1])) {
    //         count++
    //        }
    //     })
    //     return count;
        

        
    // }


    return (
        <div>
            <PageTitle title="Product list"></PageTitle>
            <div className="container">
            <div className="catalog">
                <div className="catalog__sidebar">
                    <FilterCategory 
                        // setCountProducts={setCountProducts}
                        minMaxValue={minMaxValue} 
                        // getCountProducts={getCountProducts} 
                        setMinMaxValue={setMinMaxValue} 
                        categories={categories} 
                        setActiveCategory={setActiveCategory} 
                        activeCategory={activeCategory} 
                        setBrands={setBrands} 
                        getUniqueBrand={getUniqueBrand} 
                        getMinMaxPrice={getMinMaxPrice} 
                        setMaxMinPrice={setMaxMinPrice} 
                        activeBrand={activeBrand}
                    >
                    </FilterCategory>
                    <FilterPrice 
                        // getCountProducts={getCountProducts} 
                        maxMinPrice={maxMinPrice} 
                        setMaxMinPrice={setMaxMinPrice} 
                        minMaxValue={minMaxValue} 
                        setMinMaxValue={setMinMaxValue}
                        getMinMaxPrice={getMinMaxPrice}
                        activeCategory={activeCategory}
                        activeBrand={activeBrand}
                    >
                    </FilterPrice>
                    <FilterBrand
                        // setCountProducts={setCountProducts}
                        minMaxValue={minMaxValue} 
                        // getCountProducts={getCountProducts} 
                        setMinMaxValue={setMinMaxValue} 
                        brands={brands} 
                        activeBrand={activeBrand} 
                        setActiveBrand={setActiveBrand} 
                        setCategories={setCategories} 
                        getUniqueCategory={getUniqueCategory} 
                        getMinMaxPrice={getMinMaxPrice} 
                        setMaxMinPrice={setMaxMinPrice} 
                        activeCategory={activeCategory}
                    >
                    </FilterBrand>

                    <div className="recent">

                    </div>
                </div>
                <div className="catalog__content">
                    
                     <CatalogList 
                        products={props.products} 
                        activeCategory={activeCategory} 
                        activeBrand={activeBrand} 
                        minMaxValue={minMaxValue}
                        pageNumber={pageNumber} 
                        setPageNumber={setPageNumber}
                        rangePage={rangePage}
                        setRangePage={setRangePage}
                        rangeMax={rangeMax}
    
                     >
                     </CatalogList>

                </div>
            </div>
            </div>

        </div>
    )
}

function mapStateToProps (state) {
    return {
        products: state.data 
    }
}

export default connect(mapStateToProps)(Catalog);