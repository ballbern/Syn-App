import React from 'react';
import './text-area.scss';

const TextArea = (props) => {
    return (
        <div class="c-text-area-group">
            <label for="Input">{ props.label }</label>
            <textarea id={ props.id } aria-label={ props.ariaLabel} rows={ props.rows } cols={ props.cols }></textarea>
        </div>
    )
}

export default TextArea;