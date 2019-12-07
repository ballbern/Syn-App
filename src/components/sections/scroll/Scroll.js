import React from 'react';
import ScrollCard from '../../scroolCard/scroll-card'
import './scroll.scss'

const Scroll = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="card">
                    <ScrollCard />
                </div>
                <div className="card">
                    <ScrollCard />
                </div>
                <div className="card">
                    <ScrollCard />
                </div>
                <div className="card">
                    <ScrollCard />
                </div>
                <div className="card">
                    <ScrollCard />
                </div>
                <div className="card">
                    <ScrollCard />
                </div>
            </div>
        </div>
    )
}

export default Scroll;


