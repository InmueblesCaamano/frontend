import Carousel from "../components/carousel"
import Footer from "../components/footer"
import HomeBody from "../components/homeBody"
const Home = () => {
    return (<>
        <div>
            <Carousel />
            <div className="container">
                <div className="row">
                    <div className="col-12 pt-5">
                        <h4>
                            Populares en margarita
                        </h4>
                        <hr className="w-50" />
                    </div>
                </div>
            </div>
            <HomeBody />
            <Footer />
        </div>
    </>)
}
export default Home