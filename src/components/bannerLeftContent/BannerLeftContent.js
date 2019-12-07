import React from 'react';
import Button from '../button/Button';
import "./banner-left-content.scss"; 

const BannerLeftContent = (props) => {
    return (
        <div className="c-banner-left-content">
            <span className={`c-banner-left-content__title ${ props.contentStyle && 'c-banner-left-content__title c-banner-left-content--dark-title' }`}>
                { props.title }
            </span>
            <p className={`c-banner-left-content__text ${ props.contentStyle && 'c-banner-left-content__text c-banner-left-content--dark-content' }`}>
                { props.text }
            </p>
            <Button title={ props.btnTitle } />
        </div>
    )
}

export default BannerLeftContent;