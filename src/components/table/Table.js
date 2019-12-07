import React from 'react';
import Button from '../button/Button';
import Progress from '../progress/Progress';
import "./table.scss";

const Table = (props) => {
    return (
        <table className="c-table">
            <caption>CURRENT LEARNING</caption>
            <tr>
                <td>
                    <div>Name</div>
                    <span>Nam porttitor blandit accumsan. Ut vel dictum sem, apretium dui. In malesuada enim in dolor.</span>
                </td>
                <td>
                    <div>Complete</div>
                    <span>No</span>
                </td>
                <td><Progress value="70" /></td>
                <td>
                    <div>Active</div>
                    <span>5 of 10 completed</span>
                </td>
                <td><Button btnStyle="second" title="Launch"/></td>
            </tr>
            <tr>
                <td>
                    <div>Name</div>
                    <span>Nam porttitor blandit accumsan. Ut vel dictum sem, apretium dui. In malesuada enim in dolor.</span>
                </td>
                <td>
                    <div>Complete</div>
                    <span>No</span>
                </td>
                <td><Progress value="90" /></td>
                <td>
                    <div>Active</div>
                    <span>5 of 10 completed</span>
                </td>
                <td><Button btnStyle="second" title="Launch"/></td>
            </tr>
            <tr>
                <td>
                    <div>Name</div>
                    <span>Nam porttitor blandit accumsan. Ut vel dictum sem, apretium dui. In malesuada enim in dolor.</span>
                </td>
                <td>
                    <div>Complete</div>
                    <span>No</span>
                </td>
                <td><Progress value="10" /></td>
                <td>
                    <div>Active</div>
                    <span>5 of 10 completed</span>
                </td>
                <td><Button btnStyle="second" title="Launch"/></td>
            </tr>
            <tr>
                <td>
                    <div>Name</div>
                    <span>Nam porttitor blandit accumsan. Ut vel dictum sem, apretium dui. In malesuada enim in dolor.</span>
                </td>
                <td>
                    <div>Complete</div>
                    <span>No</span>
                </td>
                <td><Progress value="60" /></td>
                <td>
                    <div>Active</div>
                    <span>5 of 10 completed</span>
                </td>
                <td><Button btnStyle="second" title="Launch"/></td>
            </tr>
        </table>
    )
}

export default Table;