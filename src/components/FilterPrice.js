import "./Filter.scss"
import React from 'react'

import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';


function FilterPrice (props) {
    

    return (
        <div className="filter">
            <h3 className="filter__title">
                Price
            </h3>
                <Range defaultValue={[0, 100]} onAfterChange={(e)=>{
                    let newMinValue = props.maxMinPrice[1] / 100 * e[0] + props.maxMinPrice[0] - (props.maxMinPrice[0] / 100 * e[0])
                    let newMaxValue = props.maxMinPrice[1] / 100 * e[1] + props.maxMinPrice[0] - (props.maxMinPrice[0] / 100 * e[1])
                    props.setMinMaxValue([
                        +newMinValue.toFixed(0), +newMaxValue.toFixed(0)
                        
                    ])
                    // props.getCountProducts(props.activeCategory, props.activeBrand, [+newMinValue.toFixed(0), +newMaxValue.toFixed(0)])

                }}
                className="filter__range"
                />
                <div className="filter__price">
                    <div className="filter__price-min">
                    &#36; {props.minMaxValue[0]}
                        </div>
                    <div className="filter__price-max">
                    &#36; {props.minMaxValue[1]}
                        </div>
                </div>
        </div>
    )
}

export default FilterPrice;