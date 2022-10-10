import React from 'react';
import {Link} from "react-router-dom";
import './PaletteHeader.css';

const PaletteHeader = () => {
    return (
        <header className="palette-header">
            <Link to={".."} className="palette-back-btn">⟵ Back</Link>
            <div className="color-format">
                <p className="active-color-format">Copy Format: HEX (#AA1923)</p>
                {/*<ul className="color-format-list">*/}
                {/*    <li>HEX (#AA1923)</li>*/}
                {/*    <li>HEX (AA1923)</li>*/}
                {/*    <li>RGB - (1,2,3)</li>*/}
                {/*    <li>RGBA - (1,2,3,0.4)</li>*/}
                {/*</ul>*/}
            </div>
            <div className="sound-btn">Sound On 🔊</div>
        </header>
    );
};

export default PaletteHeader;