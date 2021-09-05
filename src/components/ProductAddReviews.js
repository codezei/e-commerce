import React from 'react'
import {updateReviews} from "../redux/actionCreators"
import "./ProductAddReviews.scss"

function ProductAddReviews (props) {


    let [stars, setStars] = React.useState([
        <div className="rating_star"></div>,
        <div className="rating_star"></div>,
        <div className="rating_star"></div>,
        <div className="rating_star"></div>,
        <div className="rating_star"></div>
    ])

    let [newCommentData, setNewCommentData] = React.useState({
        name: "",
        date: getDateNow(),
        rating: 0,
        text: ""
    })

    function updateCommentData (e) {
        console.log(newCommentData)
    
        setNewCommentData({...newCommentData, [e.target.name]: e.target.value })
    }
    // function validateForm (data) {

    // }
    function addComment (e) {
        e.preventDefault()
        let productData;
        let newReviews;

        if (props.productReviews) {
            // validateForm(newCommentData)
            productData = {...props.productReviews, productReviews: [...props.productReviews.productReviews, newCommentData]}
            newReviews = props.reviews.map(item=>{
                return item.productId === props.productReviews.productId ? productData : item
            })
            
        } else {
            newReviews = [...props.reviews, {
                productId: props.id,
                productReviews: [newCommentData]
            }]
        }
        props.dispatch(updateReviews(newReviews))
        setNewCommentData(
            {
                name: "",
                date: getDateNow (),
                rating: 0,
                text: ""
            }
        )
    }
    function getDateNow () {
        let date = new Date()
        let res = `${date.getDate() < 10 ? "0" : ""}${date.getDate()}.${date.getMonth() < 10 ? "0" : ""}${date.getMonth() + 1}.${date.getFullYear()}`
        return res
    }
    function setReviewRating (count) {
        setNewCommentData(
            {
                ...newCommentData, rating: count + 1
            }
        )
    }
    return (
        <div className="reviews">
            <form className="reviews-form form" onSubmit={addComment}>
                <div className="form__input-wrap">
                    <input className="form__input" type="text" placeholder="NAME" name="name" value={newCommentData.name} onChange={updateCommentData} required="required" />
                </div>
                <div className="form__input-wrap form__input-wrap--center">
                    <div className="rating reviews__rating">
                        {
                            stars.map((star, starIndex)=>{
                                return (
                                    starIndex + 1 <= newCommentData.rating ? <button type="button" className="rating__star rating__star--fill" key={`star-${starIndex}`} onClick={()=>{setReviewRating(starIndex)}}></button> : <button type="button" className="rating__star" key={`star-${starIndex}`} onClick={()=>{setReviewRating(starIndex)}}></button>
                                )
                            })
                        }
                    </div>
                </div>

                <textarea name="text" value={newCommentData.text} onChange={updateCommentData} className="form__input reviews-form__msg" placeholder="MESSAGE" required="required"></textarea>
                <button type="submit" className="btn form__btn">Send</button>
            </form>
            <div className="reviews__list">
                {!!props.productReviews ? props.productReviews.productReviews.map((item, index)=>{
                    return(
                        <div key={`comment-${index}`} className="reviews__item">
                            <div className="reviews__nav">
                                <p className="reviews__name">{item.name}</p>

                                <div>
                                    <p>{item.date}</p>
                                    <div className="reviews__rating rating">
                                        {
                                            item.rating > 0 ?
                                            stars.map((star, starIndex)=>{
                                                return (
                                                    starIndex + 1 <= item.rating ? <div className="rating__star rating__star--fill" key={`star-${starIndex}`}></div> : <div className="rating__star" key={`star-${starIndex}`}></div>
                                                )
                                            }) : ""
                                        }
                                    </div>
                                </div>
                            </div>
                            <p>{item.text}</p>
                        </div>

                    )
                }).reverse() : "No reviews yet"
                }
            </div>
        </div>
    )
}

export default ProductAddReviews;