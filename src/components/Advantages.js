import "./Advantages.scss"

function Advantages () {
    let advantages = [
        {
            image: "advantage1.png",
            value: "99%",
            name: "Satisﬁed Clients Rate"
        },
        {
            image: "advantage2.png",
            value: "5200+",
            name: "Products Delivered"
        },
        {
            image: "advantage3.png",
            value: "26hr",
            name: "Daily Working Time"
        },
        {
            image: "advantage4.png",
            value: "140+",
            name: "Brands in Store"
        }
    ]
    return (
        <div className="advantages">
            <div className="container">
                <div className="advantages__list">
                    {
                        advantages.map((item, index)=>{
                            return (
                                <div className="advantages__item" key={`advantage-${index}`}>
                                    <img src={`./images/${item.image}`} alt="" className="advantages__img"/>
                                    <p className="advantages__value">
                                        {item.value}
                                    </p>
                                    <p className="advantages__name">
                                        {item.name}
                                    </p>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </div>
    )
}

export default Advantages;