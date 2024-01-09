import { useState, useEffect } from "react"
import {v4 as uuid} from "uuid"
import { list } from "./data"
import {FaQuoteRight } from 'react-icons/fa';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'

const Carousel = () => {
    const [people, setPeople] = useState(list);
    const [currentPerson, setCurrentPerson] = useState(0);

    const prevSlide = () => {        
        setCurrentPerson((currentPerson - 1 + people.length) % people.length);                
    };

    const nextSlide = () => {        
        setCurrentPerson((currentPerson + 1) % people.length);                
    };

    useEffect(() => {
        let sliderId = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => {
            clearInterval(sliderId);
        };
    }, [currentPerson]);

    return (
        <section className="slide-container">
            {people.map((person, personIndex) => {
                const {id, image, name, title, quote} = person;
                return (
                    <article className="slide" 
                        style={{
                            transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
                            opacity: personIndex === currentPerson ? 1 : 0,
                            visibility: personIndex === currentPerson ? 'visible' : 'hidden',
                        }}
                        key={uuid()}
                    >
                        <img src={image} alt={name} className="person-img"/>
                        <h5 className="name">{name}</h5>
                        <p className="title">{title}</p>
                        <p className="text">{quote}</p>
                        <FaQuoteRight className="icon"/>
                    </article>
                )
            })}
            <button type="button" className="prev" onClick={() => {prevSlide()}}><FiChevronLeft /></button>
            <button type="button" className="next" onClick={() => {nextSlide()}}><FiChevronRight /></button>            
        </section>
    )
};

export default Carousel;


