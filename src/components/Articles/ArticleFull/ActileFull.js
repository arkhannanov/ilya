import React from 'react';
import articleImage from './../../../assets/images/acticle-image.png';
import './ArticleFull.scss';
import {Facebook, Linkedin, Mail, Telegram, Twitter, VK, Whatsapp} from 'react-social-sharing';

const ArticleFull = (props) => {
    const {title, content} = props;

    return (
        <div>
            <div className='article-full'>
                <div className='article-full__header'>
                    <img className='article-full__header-image' src={articleImage} alt="Article"/>
                    <div className='article-full__header-title'>{title}
                    </div>
                </div>
            </div>
            <div className='article-full__content'>{content}</div>
            <div className='article-full__social'>
                <div className='article-full__social-title'>Рассказать друзьям:</div>
                <div className='article-full__social-items'>
                    <Twitter
                        solid
                        small
                        link={`${window.location.href}`}
                    />
                    <Facebook solid small link={`${window.location.href}`}/>
                    <Mail solid small subject="I am so cool" link={`${window.location.href}`}/>
                    <Linkedin solid small message="I am so cool" link={`${window.location.href}`}/>
                    <Whatsapp solid small message="Share on Whatsapp" link={`${window.location.href}`}/>
                    <VK solid small message="Share on VK" link={`${window.location.href}`}/>
                    <Telegram solid small message="Share on Telegram" link={`${window.location.href}`}/>
                </div>
            </div>

        </div>
    )
};

export default ArticleFull;