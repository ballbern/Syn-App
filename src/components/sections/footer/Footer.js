import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import "./footer.scss"; 

export default class Footer extends React.Component {
    render() {
        return (
            <>
            <footer className="c-footer">
                <div className="c-footer__right-content">
                    <div>Search for Courses</div>
                    <p>Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut.</p>
                    <div>form field</div>
                    
                </div>
                <div className="c-footer__center-content">
                    <div>More Links</div>
                    <ul>
                        <li>Terms of Service</li>
                        <li>Terms of Service</li>
                        <li>Terms of Service</li>
                        <li>Terms of Service</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
                <div className="c-footer__left-content">
                    <div>Social Media</div>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faCoffee} color="#4DABBE" />
                            Website Link
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCoffee} color="#4DABBE" />
                            Website Link
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCoffee} color="#4DABBE" />
                            Website Link
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCoffee} color="#4DABBE" />
                            Website Link
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCoffee} color="#4DABBE" />
                            Website Link
                        </li>
                    </ul>
                </div>
            </footer>
            <div className="c-footer__logo"></div>
            </>
        )
    }
} 