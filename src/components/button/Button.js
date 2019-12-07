import React from 'react';
import "./button.scss"; 

const Button = (props) => {
    return (
        <button 
            className={`c-button c-button${ props.btnStyle === 'second' ? '--second' : props.btnStyle === 'small' ? '--small' : '--first' }`} 
            type="button" >
                { props.title }
        </button>
    )
}

export default Button;