import React from 'react';
import './CopiedOverlay.css';

const CopiedOverlay = ({copied}) => (
    <div className="color-copied-overlay"
        style={{background: copied.color}}>
        <div className={`color-copied-overlay-text ${copied.showText ? 'copiedColorIn' : 'copiedColorOut'}`}>
            <h1><span>{copied.message}</span></h1>
            <p>{copied.color}</p>
        </div>
    </div>
);

export default CopiedOverlay;