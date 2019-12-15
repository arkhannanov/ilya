import React from 'react';
import './ArticleTop.scss';
import articleImage from './../../../assets/images/acticle-image.png';
import ArticleContent from "../ArticleContent/ArticleContent";


const ArticleTop = (props) => {
    const {id, image, title, content} = props;

    console.log(content);

    return (
        <div>
            <div className='article-top'>
                <img className='article-top__image' src={articleImage} alt="Article"/>
                <ArticleContent id={id} ititle={title} content={content} />
            </div>
            <div className="article__advertisement">Реклама</div>
        </div>
    )
};

export default ArticleTop;