import React from 'react';
import {Link} from "react-router-dom";
import './PaletteHeader.css';

const PaletteHeader = () => {
    return (
        <header className="palette-header">
            <Link to={".."} className="palette-back-btn">⟵ Back</Link>
            <div className="color-format">
                <p>Copy format: HEX (#AA1923)</p>
            </div>
            <div className="sound-btn">Sound On 🔊</div>
        </header>
    );
};

export default PaletteHeader;