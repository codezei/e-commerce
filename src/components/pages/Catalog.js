
import PageTitle from "../PageTitle"
import {connect} from 'react-redux'
import React from 'react'
import FilterCategory from "../FilterCategory"
import FilterBrand from "../FilterBrand"
import CatalogList from "../CatalogList"
import FilterPrice from "../FilterPrice"



function Catalog (props) {
    let [categories, setCategories] = React.useState([])
    let [brands, setBrands] = React.useState([])
    let [activeCategory, setActiveCategory] = React.useState("")
    let [activeBrand, setActiveBrand] = React.useState("")
    let [maxMinPrice, setMaxMinPrice] = React.useState(0)
    let [minMaxValue, setMinMaxValue] = React.useState([])

    React.useEffect(()=>{
        setMaxMinPrice(getMinMaxPrice(activeCategory, activeBrand))
        setMinMaxValue(getMinMaxPrice(activeCategory, activeBrand))
        setCategories(getUniqueCategory(activeBrand))
        setBrands(getUniqueBrand(activeCategory))
    }, [])

    function getUniqueCategory (acbrand) {
        let arr = []
        props.products.forEach(item=>{
            if ((acbrand === "" || acbrand === item.brand)) {
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
    function getUniqueBrand (accat) {
        let arr = []
        props.products.forEach(item=>{
            if ((accat === "" || accat === item.category)) {
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
    function getMinMaxPrice(accat, acbrand) {

        let arr = [props.products[0].price, props.products[0].price]

        props.products.forEach(item=>{

            if((item.price < arr[0]) && (acbrand === "" || acbrand === item.brand) && (accat === "" || accat === item.category)) {
                arr[0] = item.price
            } else if ((item.price > arr[1]) && (acbrand === "" || acbrand === item.brand) && (accat === "" || accat === item.category)) {
                arr[1] = item.price
            } 

        }) 
        console.log(arr)
        return arr
        

    }

    return (
        <div>
            <PageTitle title="Product list"></PageTitle>
            <div className="catalog">
                <div className="sidebar">
                    <FilterCategory setMinMaxValue={setMinMaxValue} categories={categories} setActiveCategory={setActiveCategory} activeCategory={activeCategory} setBrands={setBrands} getUniqueBrand={getUniqueBrand} getMinMaxPrice={getMinMaxPrice} setMaxMinPrice={setMaxMinPrice} activeBrand={activeBrand}></FilterCategory>
                    <FilterBrand setMinMaxValue={setMinMaxValue} brands={brands} activeBrand={activeBrand} setActiveBrand={setActiveBrand} setCategories={setCategories} getUniqueCategory={getUniqueCategory} getMinMaxPrice={getMinMaxPrice} setMaxMinPrice={setMaxMinPrice} activeCategory={activeCategory}></FilterBrand>
                    <FilterPrice  maxMinPrice={maxMinPrice} setMaxMinPrice={setMaxMinPrice} minMaxValue={minMaxValue} setMinMaxValue={setMinMaxValue}></FilterPrice>

                    <div className="recent">

                    </div>
                </div>
                    <CatalogList products={props.products} activeCategory={activeCategory} activeBrand={activeBrand} minMaxValue={minMaxValue}></CatalogList>
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