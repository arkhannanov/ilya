import React from 'react';
import './News.scss';
import NewsItem from "./NewsItem/NewsItem";
import Slider from "react-slick";
import {NavLink} from "react-router-dom";

function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "block", width: "30px", height: "30px", background: 'red'}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "block", width: "30px", height: "30px", background: 'red'}}
            onClick={onClick}
        />
    );
}

class News extends React.Component {
    render() {
        let settings = {
            className: "center",
            centerMode: false,
            centerPadding: -50,
            infinite: true,
            slidesToShow: 3,
            speed: 500,
            focusOnSelect: true,
            nextArrow: <SampleNextArrow/>,
            prevArrow: <SamplePrevArrow/>
        };

        return (
            <Slider {...settings} className='news'>
                <NavLink to="/news/1" className='news__link'><NewsItem/></NavLink>
                <NavLink to="/news/2" className='news__link'><NewsItem/></NavLink>
                <NavLink to="/news/3" className='news__link'><NewsItem/></NavLink>
                <NavLink to="/news/4" className='news__link'><NewsItem/></NavLink>
                <NavLink to="/news/5" className='news__link'><NewsItem/></NavLink>
                <NavLink to="/news/6" className='news__link'><NewsItem/></NavLink>
                <NavLink to="/news/7" className='news__link'><NewsItem/></NavLink>
                <NavLink to="/news/8" className='news__link'><NewsItem/></NavLink>
                <NavLink to="/news/9" className='news__link'><NewsItem/></NavLink>
                <NavLink to="/news/10" className='news__link'><NewsItem/></NavLink>
            </Slider>
        )
    }
}

export default News;