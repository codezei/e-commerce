
import PageTitle from "../PageTitle"
import {connect} from 'react-redux'
import React from 'react'
import FilterCategory from "../FilterCategory"
import FilterBrand from "../FilterBrand"
import CatalogList from "../CatalogList"
import FilterPrice from "../FilterPrice"
import FilterRecent from "../FilterRecent"
import Partners from '../Partners'
import Footer from '../Footer'
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
        setCategories(getUniqueCategory(activeBrand, minMaxValue))
        setBrands(getUniqueBrand(activeCategory, minMaxValue))
        
        
    }, [])



    function getUniqueCategory (brand, price) {
        let arr = []
        props.products.forEach(item=>{
            if ((brand === "" || brand === item.brand) && (item.price >= price[0] && item.price <= price[1])) {
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
    function getUniqueBrand (category, price) {
        let arr = []
        props.products.forEach(item=>{
            if ((category === "" || category === item.category) && (item.price >= price[0] && item.price <= price[1])) {
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
        console.log(arr)
        props.products.forEach(item=>{
            if((item.price < arr[0]) && (brand === "" || brand === item.brand) && (category === "" || category === item.category)) {
                arr[0] = item.price
            } else if ((item.price > arr[1]) && (brand === "" || brand === item.brand) && (category === "" || category === item.category)) {
                arr[1] = item.price
            } 

        }) 
        return arr 
    }

    return (
        <div>
            <PageTitle title="Product list"></PageTitle>
            <div className="container">
                <div className="catalog">
                    <div className="catalog__sidebar">
                        <FilterCategory 
                            minMaxValue={minMaxValue} 
                            setMinMaxValue={setMinMaxValue} 
                            categories={categories} 
                            setActiveCategory={setActiveCategory} 
                            activeCategory={activeCategory} 
                            setBrands={setBrands} 
                            getUniqueBrand={getUniqueBrand} 
                            getMinMaxPrice={getMinMaxPrice} 
                            setMaxMinPrice={setMaxMinPrice} 
                            activeBrand={activeBrand}
                            maxMinPrice={maxMinPrice} 
    
                        >
                        </FilterCategory>
                        <FilterPrice 
                            maxMinPrice={maxMinPrice} 
                            setMaxMinPrice={setMaxMinPrice} 
                            minMaxValue={minMaxValue} 
                            setMinMaxValue={setMinMaxValue}
                            getMinMaxPrice={getMinMaxPrice}
                            activeCategory={activeCategory}
                            activeBrand={activeBrand}
                            getUniqueBrand={getUniqueBrand}
                            setBrands={setBrands}

                        >
                        </FilterPrice>
                        <FilterBrand
                            minMaxValue={minMaxValue} 
                            setMinMaxValue={setMinMaxValue} 
                            brands={brands} 
                            activeBrand={activeBrand} 
                            setActiveBrand={setActiveBrand} 
                            setCategories={setCategories} 
                            getUniqueCategory={getUniqueCategory} 
                            getMinMaxPrice={getMinMaxPrice} 
                            setMaxMinPrice={setMaxMinPrice} 
                            activeCategory={activeCategory}
                            setBrands={setBrands} 
                            getUniqueBrand={getUniqueBrand} 
                            maxMinPrice={maxMinPrice} 
                        >
                        </FilterBrand>

                        <FilterRecent></FilterRecent>
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
                            cart={props.cart}
                            favList={props.favList}
                            dispatch={props.dispatch}
                        >
                        </CatalogList>
                    </div>
                </div>
            </div>
            <Partners></Partners>
            <Footer></Footer>

        </div>
    )
}

function mapStateToProps (state) {
    return {
        products: state.data,
        cart: state.cart,
        favList: state.favList
    }
}

export default connect(mapStateToProps)(Catalog);