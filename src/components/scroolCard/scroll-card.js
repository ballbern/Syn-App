import React from 'react';
import Button from '../button/Button'
import "./scroll-card.scss";

const Card = () => {
    return (
        <div class="c-scroll-card">
            <img src={require("../../assets/profile_pic.png")} alt="image" className="c-scroll-card__img"/>
            <div class="c-scroll-card__container">
                <div>NAM PORTTITOR BLANDIT ACCUMSAN.</div> 
                <p>Mauris non tempor quam, et laciniasapien. Mauris accumsan eros egetlibero posuere vulputate. Etiam elitelit, elementum sed varius at,adipiscing vitae est…</p> 
                <Button btnStyle="small" title="View" /> 
            </div>
        </div>
    )
}

export default Card;