import React from 'react';
import './NewsItem.scss';
import laptop from './../../../assets/images/laptop.png';
import dateIcon from './../../../assets/images/date-image.png'


const News = () => {
    return (
        <div className='news-item'>
            <img className='news-item__image' src={laptop} alt='laptop'/>
            <div className='news-item__title'>Название поста</div>
            <div className='news-item__date'>
                <img src={dateIcon} alt='date-icon' width={17}/>
                <div className='news-item__date-content'>Сегодня</div>
            </div>
            <div className='news-item__content'>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do
                eiusmod tempor incididunt...
            </div>
        </div>
    )
}

export default News;