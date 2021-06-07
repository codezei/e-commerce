import React from 'react'
import {updateReviews} from "../redux/actionCreators"
import "./ProductAddReviews.scss"

function ProductAddReviews (props) {

    React.useEffect(()=>{
        console.log(props.productReviews)

    }, [props.reviews])
    
    let [newCommentData, setNewCommentData] = React.useState({
        name: "",
        date: "",
        rating: "",
        text: ""
    })
    function updateCommentData (e) {
        console.log(newCommentData)
    
        setNewCommentData({...newCommentData, [e.target.name]: e.target.value })
    }
    function addComment (e) {
        let productData;
        let newReviews;
        console.log(props.productReviews)

        if (props.productReviews) {
            productData = {...props.productReviews, productReviews: [...props.productReviews.productReviews, newCommentData]}
        
            newReviews = props.reviews.map(item=>{
                return item.productId === props.productReviews.productId ? productData : item
            })
        } else {
            newReviews = [...props.reviews, {
                productId: props.id,
                productReviews: [newCommentData]
            }]
            console.log(newReviews)
            console.log(props.reviews)
        }


        props.dispatch(updateReviews(newReviews))

    }
    return (
        <div className="reviews">
            <form className="reviews-form">
                <div className="reviews-form__input-wrap">
                    <input className="reviews-form__input" type="text" placeholder="name" name="name" value={newCommentData.name} onChange={updateCommentData} />
                </div>
                {/* <div className="rating reviews__rating">
                    <button className="rating_star"></button>
                    <button className="rating_star"></button>
                    <button className="rating_star"></button>
                    <button className="rating_star"></button>
                    <button className="rating_star"></button>
                </div> */}
                <textarea name="text" value={newCommentData.comment} onChange={updateCommentData} className="reviews-form__input"></textarea>
                <button type="button" onClick={addComment} className="btn review-form__btn">Отправить</button>
            </form>
            <div className="reviews__list">
                {!!props.productReviews ? props.productReviews.productReviews.map((item, index)=>{
                    return(
                        <div key={`comment-${index}`}>
                            <p>{item.name}</p>
                            <p>{item.rating}</p>
                            <p>{item.text}</p>
                        </div>

                    )
                }) : "Отзывов пока нет"
                }
            </div>
        </div>
    )
}

export default ProductAddReviews;