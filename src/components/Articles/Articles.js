import React from 'react';
import './Articles.scss';
import articlesImage from './../../assets/images/articles.png';
import ArticleTop from "./ArticleTop/ArticleTop";
import ArticleBottom from "./ArticleBottom/ArticleBottom";
import {connect} from "react-redux";

const Articles = (props) => {

    const {articles} = props;

    return (
        <div className='articles'>
            <div className="articles__title">
                <img src={articlesImage} alt="Articles" height={33} width={38} vspace={6}/>
                <div className="articles__title-content">Статьи</div>
            </div>
            <div className="articles__acticles-container">
                {articles.map ( article =>
                    <ArticleTop key={article.id} id={article.id} image={article.image} title={article.title} content={article.content} />
                )}
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    articles: state.articles.articles
})

export default connect(mapStateToProps, {})(Articles);