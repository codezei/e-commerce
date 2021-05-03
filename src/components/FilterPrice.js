import "./FilterPrice.scss"
import React from 'react'

import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';


function FilterPrice (props) {
    

    return (
        <div className="filter-price">
            <h3 className="filter-price__title">
                Price
            </h3>
                <Range defaultValue={[0, 100]} onAfterChange={(e)=>{
                    console.log(e+' afterchange')
                    let newMinValue = props.maxMinPrice[1] / 100 * e[0] + props.maxMinPrice[0] - (props.maxMinPrice[0] / 100 * e[0])
                    let newMaxValue = props.maxMinPrice[1] / 100 * e[1] + props.maxMinPrice[0] - (props.maxMinPrice[0] / 100 * e[1])
                    props.setMinMaxValue([
                        newMinValue, newMaxValue
                        
                    ])

                }}
                />
                <div className="range">
                    <div className="value-min">{props.minMaxValue[0]}</div>
                    <div className="value-max">{props.minMaxValue[1]}</div>
                </div>
        </div>
    )
}

export default FilterPrice;