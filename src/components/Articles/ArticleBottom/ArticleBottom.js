import React from 'react';
import './ArticleBottom.scss';
import articleImage from './../../../assets/images/acticle-image.png';
import ArticleContent from "../ArticleContent/ArticleContent";


const ArticleBottom = () => {
    return (
        <div className='article-bottom'>
            <ArticleContent/>
            <img src={articleImage} alt="Article"/>
        </div>
    )
};

export default ArticleBottom;