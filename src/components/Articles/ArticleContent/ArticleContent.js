import React from 'react';
import './ArticleContent.scss';
import dateImage from './../../../assets/images/date-image.png';
import comments from './../../../assets/images/comments.png';
import button from './../../../assets/images/article-button.png';

const ArticleContent = () => {
    return (
        <div className='article-content'>
            <div className='article-content__title'>Самые востребованные
                профессии в 2019 г
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
            <div className='article-content__content'>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim
            </div>
            <button className='article-content__button'>
                <img src={button} alt="Article-button" className='article-content__button-image' />
                <div className='article-content__button-content'>&nbsp;Читать Далее </div>
            </button>
        </div>
    )
};

export default ArticleContent;