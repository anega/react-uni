import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './PaletteHeader.css';

const PaletteHeader = ({isMuted, onClick}) => {
    const [showDropdown, setShowDropdown] = useState(false);

    function handleShowDropdown() {
        setShowDropdown((prevState) => !prevState);
    }

    return (
        <header className="palette-header">
            <Link to={".."} className="palette-back-btn">⟵ Back</Link>
            <div className={`color-format ${showDropdown ? 'show' : ''}`} onClick={handleShowDropdown}>
                <p className="active-color-format">Copy Format: HEX (#AA1923)</p>
                <ul className="color-format-list">
                    <li value="hex">HEX (#AA1923)</li>
                    <li value="hexNoHash">HEX (AA1923)</li>
                    <li value="rgb">RGB - (1,2,3)</li>
                    <li value="rgba">RGBA - (1,2,3,0.4)</li>
                </ul>
            </div>
            <div className="sound-btn" onClick={onClick}>Sound {`${isMuted ? 'Off 🔇' : 'On 🔊'}`}</div>
        </header>
    );
};

export default PaletteHeader;