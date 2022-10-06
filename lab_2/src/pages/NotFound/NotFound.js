import React from 'react';
import './NotFound.css';
import video from '../../assets/videos/404.mp4';

const NotFound = () => (
    <div className="section not-found">
        <video width="100%" height="auto" autoPlay muted>
            <source src={video} type="video/mp4"/>
        </video>
        <div className="description">
            <div>
                <h1>404 Page not found</h1>
                <p>You visited a page this site doesn't have.</p>
            </div>
        </div>
    </div>
);

export default NotFound;