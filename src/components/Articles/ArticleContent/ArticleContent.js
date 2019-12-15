import React from 'react';
import './ArticleContent.scss';
import dateImage from './../../../assets/images/date-image.png';
import comments from './../../../assets/images/comments.png';
import button from './../../../assets/images/article-button.png';
import {NavLink} from "react-router-dom";
import NewsItem from "../../News/NewsItem/NewsItem";
import Slider from "react-slick";

const ArticleContent = (props) => {

    const {id, title, content} = props;

    return (
        <div className='article-content'>
            <div className='article-content__title'>{title}
            </div>
            <div className='article-content__options'>
                <div className='article-content__options-time'>
                    <img src={dateImage} alt="time" width={13} height={13}/>
                    <div className='article-content__options-time-content'>Сегодня</div>
                </div>
                <div className='article-content__options-comments'>
                    <img src={comments} alt="comments" width={15} height={15}/>
                    <div className='article-content__options-comments-content'>Комментария</div>
                </div>
            </div>
            <div className='article-content__content'>{content}
            </div>
            <NavLink to={`/artiles/${id}`} className='article-content__button'> <button className='article-content__button-button'>
                <img src={button} alt="Article-button" className='article-content__button-image'/>
                <div className='article-content__button-content'>&nbsp;Читать Далее</div>
            </button></NavLink>
        </div>
    )
};

export default ArticleContent;