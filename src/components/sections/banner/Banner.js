import React from 'react';
import "./banner.scss"; 

const Banner = (props) => {
    return (
        <header className="c-banner">
            { props.linkNav }
            { props.navBar }
            <div className="c-banner__content">
                { props.left }
                { props.right }
            </div>
        </header>
    )
}

export default Banner;