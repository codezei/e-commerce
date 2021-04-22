import Promo from '../Promo'
import Products from '../Products'
function Home () {
    return (
        <div>
            <Promo></Promo>
            <Products title="Products of the week" label="week"></Products>
            <Products title="New Design" label="new"></Products>
        </div>
    )
}
export default Home;