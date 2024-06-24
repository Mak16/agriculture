import Carousel from 'react-bootstrap/Carousel';
import HeroStyleTwoImg1 from "../../assets/images/tomatoes-2653425_1920.jpg";
import HeroStyleTwoImg2 from "../../assets/images/potatoes-2329648_1920.jpg";

function CarouselHero() {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center vh-100 '>
            <Carousel fade className='w-100 h-100 '>
                <Carousel.Item className='vh-100 '>
                    <div className="d-flex w-100 h-100  position-absolute">
                        <div className='container d-flex flex-column justify-content-center ' >
                            <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 offset-xl-1 offset-lg-1 offset-md-1'>
                                <div >
                                    <h2 className='cs_txtColWhite cs_font68'>Bienvenu sur notre site de vente des produits agricoles & Consultance agricole</h2>
                                    <button className='l-btn mt-20'>
                                        Nos services
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        className="d-block w-100 h-100"
                        src={HeroStyleTwoImg1}
                        alt="First slide"
                        style={{ objectFit: 'cover' }}
                    />


                </Carousel.Item>
                <Carousel.Item className='vh-100 '>
                    <div className="d-flex w-100 h-100  position-absolute">
                        <div className='container d-flex flex-column justify-content-center ' >
                            <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 offset-xl-1 offset-lg-1 offset-md-1'>
                                <div >
                                    <h2 className='cs_txtColWhite cs_font68'>Bienvenu sur notre site de vente des produits agricoles & Consultance agricole</h2>
                                    <button className='l-btn mt-20'>
                                        Nos services
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        className="d-block w-100 h-100"
                        src={HeroStyleTwoImg2}
                        alt="First slide"
                        style={{ objectFit: 'cover' }}
                    />


                </Carousel.Item>
                <Carousel.Item className='vh-100 '>
                    <div className="d-flex w-100 h-100  position-absolute">
                        <div className='container d-flex flex-column justify-content-center ' >
                            <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 offset-xl-1 offset-lg-1 offset-md-1'>
                                <div >
                                    <h2 className='cs_txtColWhite cs_font68'>Bienvenu sur notre site de vente des produits agricoles & Consultance agricole</h2>
                                    <button className='l-btn mt-20'>
                                        Nos services
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        className="d-block w-100 h-100"
                        src={HeroStyleTwoImg1}
                        alt="First slide"
                        style={{ objectFit: 'cover' }}
                    />


                </Carousel.Item>

            </Carousel>

        </div>
    );
}

export default CarouselHero;