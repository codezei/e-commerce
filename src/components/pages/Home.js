import Promo from '../Promo'
import Products from '../Products'
import Services from '../Services'
import Lamps from '../Lamps'
import Video from '../Video'
import Articles from '../Articles'
import Partners from '../Partners'
import Footer from '../Footer'
function Home () {
    return (
        <div>
            <Promo></Promo>
            <Services></Services>
            <Products title="Products of the week" label="week"></Products>
            <Lamps></Lamps>
            <Products title="New Design" label="new"></Products>
            <Video></Video>
            <Articles></Articles>
            <Partners></Partners>
            <Footer></Footer>
        </div>
    )
}
export default Home;