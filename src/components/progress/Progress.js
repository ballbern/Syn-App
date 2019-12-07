import React from 'react';
import './progress.scss'

const Progress = (props) => {
    return (
        <progress 
            value={ props.value } max="100" className="c-progress">
        </progress>
    )
}

export default Progress;