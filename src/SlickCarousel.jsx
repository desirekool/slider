import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from "react-slick";
import { list } from "./data"
import {v4 as uuid} from "uuid"
import {FaQuoteRight } from 'react-icons/fa';

const SlickCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <section className="slick-container">
          <Slider {...settings}>
            {list.map(({id, image, name, title, quote}) => <article key={uuid()}>
                        <img src={image} alt={name} className="person-img"/>
                        <h5 className="name">{name}</h5>
                        <p className="title">{title}</p>
                        <p className="text">{quote}</p>
                        <FaQuoteRight className="icon"/>
                    </article>                
            )}
          </Slider>
        </section>
    );
}

export default SlickCarousel;