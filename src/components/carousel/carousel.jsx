import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import bg from "../../assets/img/background/op.png"
import ScrollDown from '../scroll-down-component/scrollDown'
import './carousel.style.css';
const MyCarousel = () => {
    return (
        <div id="home">
            <Carousel controls={false} indicators interval={2500} pause={false}>
                <Carousel.Item>
                    <img className="d-block w-100 custom-img" src={bg} alt="First slide"/>
                </Carousel.Item>
            </Carousel>
            <ScrollDown/>
        </div>
    )
}

export default MyCarousel
