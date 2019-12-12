import React from 'react';
import './Articles.scss';
import articles from './../../assets/images/articles.png';
import ArticleTop from "./ArticleTop/ArticleTop";
import ArticleBottom from "./ArticleBottom/ArticleBottom";

const Articles = () => {
    return (
        <div className='articles'>
            <div className="articles__title">
                <img src={articles} alt="Articles" height={33} width={38} vspace={6}/>
                <div className="articles__title-content">Статьи</div>
            </div>
            <ArticleTop />
            <ArticleBottom/>
        </div>
    )
};

export default Articles;