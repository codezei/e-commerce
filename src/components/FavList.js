
import "./FavList.scss"

function FavList (props) {

    return (
        <div className="flist">
            <h2 className="flist__title">Список желаний</h2>
            <button type="button" className="flist__close" onClick={props.closeFavList}>
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
            </button>
            {
              props.favList.length ? props.favList.map(item=>{
                    return (
                        <div key={item.id} className="flist__item">
                            <div className="flist__name">{item.name}</div>
                            <div className="flist__price">{item.price} $</div>
                            <button type="button" className="flist__cart-btn" onClick={()=>{
                                props.addProductToCart(item)
                            }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={22} height={20} viewBox="0 0 22 20">
                                    <path fill="currentColor" fillRule="evenodd" d="M800.814,1564.63h2.333l3.323,12.04a0.812,0.812,0,0,0,.787.59h10.214a0.821,0.821,0,0,0,.746-0.48l3.717-8.56a0.836,0.836,0,0,0-.068-0.78,0.813,0.813,0,0,0-.678-0.37H809.9a0.82,0.82,0,0,0,0,1.64H819.94l-3.011,6.92h-9.062l-3.323-12.03a0.808,0.808,0,0,0-.787-0.6h-2.943A0.815,0.815,0,0,0,800.814,1564.63Zm5.67,18.37a1.85,1.85,0,1,0-1.845-1.85A1.85,1.85,0,0,0,806.484,1583Zm11.53,0h0.135A1.907,1.907,0,1,0,818.014,1583Z" transform="translate(-800 -1563)" />
                                </svg>
                            </button>
                            <button type="button" className="flist__remove" onClick={()=>{props.removeFavListProduct(item.id)}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </button>
                        </div>

                    )
                }) : "Список пуст"
            }
        </div>
    )
}

export default FavList;