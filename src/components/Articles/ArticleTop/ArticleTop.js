import React from 'react';
import './ArticleTop.scss';
import articleImage from './../../../assets/images/acticle-image.png';
import ArticleContent from "../ArticleContent/ArticleContent";


const ArticleTop = () => {
    return (
        <div className='article-top'>
            <img src={articleImage} alt="Article"/>
            <ArticleContent/>
        </div>
    )
};

export default ArticleTop;