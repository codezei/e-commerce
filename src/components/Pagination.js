import React from 'react'
import  './Pagination.scss'

function Pagination (props) {

    let [pages, setPages] = React.useState([])

    function getCountPage () {
        let count = Math.ceil(props.productsWithoutEmpty.length / props.rangeMax)
        let arr = []
        for(let i = 0; i < count; i++) {
            arr.push(i+ 1)
        }
        return arr
    }

    React.useEffect(()=>{
        setPages(getCountPage())
        
    }, [props.productsWithoutEmpty])

    return (
        <div className="pagination">
            {
                pages.map((item)=>{
                    return (
                        <button onClick={()=>{
                            props.setPageNumber(item)
                            props.setRangePage(item * props.rangeMax)
                        }}
                        key={`page=${item}`}
                        className={`pagination__btn ${item === props.pageNumber ? 'pagination__btn--active' : ''}`}
                        disabled={pages.length === 1 ? true : false}
                        >{item}</button>
                    )
                })
                
            }
            {pages.length > 1 && (props.pageNumber !== pages.length) ? <button className="pagination__btn" onClick={()=>{
                props.setPageNumber(props.pageNumber + 1)
                props.setRangePage((props.pageNumber + 1) * props.rangeMax)
            }}>Next</button> : '' }

        </div>
    )
}

export default Pagination;