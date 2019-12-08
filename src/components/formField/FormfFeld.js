import React from 'react';
import './form-field.scss';

const FormField = (props) => {
    return (
        <div class="c-form-group">
            <label for="Input">{ props.label }</label>
            <input type="text" className="form-control" id={ props.id } aria-label={ props.ariaLabel } aria-describedby="aria"/>
        </div>
    )
}

export default FormField;