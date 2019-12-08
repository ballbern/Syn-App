import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit } from '@fortawesome/free-solid-svg-icons'
import "./card.scss";

const Card = () => {
    return (
        <article className="c-card">
            <img src={require("../../assets/profile_pic.png")} alt="image" className="c-card__img"/>
            <div className="c-card__content">
                <h4>TERRY MORGAN</h4> 
                <span>terry.morgan@centizu.com</span>
                <div>Last access to site</div>
                <div>Thursday, 5 October 2017</div>
                <div>BADGES</div>
                <span className="c-card__icon">
                    <i><FontAwesomeIcon icon={faCoffee} color="white" /></i>
                    <i><FontAwesomeIcon icon={faEdit} color="white" /></i>
                    <i><FontAwesomeIcon icon={faCoffee} color="white" /></i>
                    <i><FontAwesomeIcon icon={faCoffee} color="white" /></i>
                    <i><FontAwesomeIcon icon={faCoffee} color="#EDEDEF" /></i>
                </span>
            </div>
        </article>
    )
}

export default Card;