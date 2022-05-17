import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Home.css'
const Home = () => {
    return (
        <>
            <Carousel showArrows={true}>
                <div>
                    <img className='carousel-img' src="https://wallpapercave.com/wp/wp8451162.jpg" alt="bullpadel" />
                    <p className="legend p-carousel">Bullpadel</p>
                </div>
                <div>
                    <img className='carousel-img' src='https://i0.wp.com/everythingpadel.co.uk/wp-content/uploads/2021/04/adidas-padel-rackets-5-scaled.jpg' alt="adidas" />
                    <p className="legend p-carousel">Adidas</p>
                </div>
                <div>
                    <img className='carousel-img' src='https://ae01.alicdn.com/kf/U22f5a1aec6d645678e0451b8d43ca725n.jpg' alt="court" />
                    <p className="legend p-carousel">La mejor calidad</p>
                </div>
            </Carousel>

            <section className='home-section'>
                <div>
                    <img className='img-section' src='https://mejoratupadel.com/wp-content/uploads/2021/01/vertex3-general.jpg' alt='accesorios'></img>
                    <h3>Paletas</h3>
                    <p>Las mejores paletas para tu juego</p>
                </div>
                <div>
                    <img className='img-section' src='https://i.ytimg.com/vi/XTWAa035eHs/maxresdefault.jpg' alt='accesorios'></img>
                    <h3>Accesorios</h3>
                    <p>Los mejores accesorios para complementar tu deporte favorito</p>
                </div>
                <div>
                    <img className='img-section' src='https://marcadegol.com/fotos//2020/01/adidas-stycon-1.jpg' alt='accesorios'></img>
                    <h3>Zapatillas</h3>
                    <p>El mejor calzado, la última tecnología</p>
                </div>

            </section>
        </>
    )
}

export default Home;