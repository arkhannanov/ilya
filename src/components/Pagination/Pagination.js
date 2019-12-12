import React from 'react';
import './Pagination.scss';
import pagitation from './../../assets/images/pagination.png';

const ArticleBottom = () => {
    return (
        <div className='pagination'>
            <div className='pagination__number'>1</div>
            <div className='pagination__number'>2</div>
            <div className='pagination__number'>3</div>
            <div className='pagination__number'>4</div>
            <div className='pagination__pagination'>
                <img src={pagitation}  className='pagination__pagination-image' alt='pagination'/>
            </div>
        </div>
    )
};

export default ArticleBottom;