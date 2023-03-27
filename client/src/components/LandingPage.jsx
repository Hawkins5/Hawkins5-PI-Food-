import React from "react";
import { Link } from 'react-router-dom';
import './landingpage.css';

export default function LandingPage() {
    return (
        <div className="landing">
            <h1 className="welcomeMsg">Enjoy cooking? Welcome to your favorite place to do it!</h1>
            <Link to='/home' id="click">
                <button className="homeButton">Let's go</button>
            </Link>

        </div>
    )
}
