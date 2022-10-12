import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './PaletteHeader.css';

const PaletteHeader = ({isMuted, onClick}) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [copyFormatText, setCopyFormatText] = useState('HEX (#AA1923)');

    function handleShowDropdown() {
        setShowDropdown((prevState) => !prevState);
    }

    function handleFormatChange(event) {
        setCopyFormatText((prevState) => event.target.textContent);
    }

    return (
        <header className="palette-header">
            <Link to={".."} className="palette-back-btn">⟵ Back</Link>
            <div className={`color-format ${showDropdown ? 'show' : ''}`} onClick={handleShowDropdown}>
                <p className="active-color-format">Copy Format: {copyFormatText}</p>
                <ul className="color-format-list">
                    <li
                        onClick={(event) => handleFormatChange(event)}
                        value="hex">
                        HEX (#AA1923)
                    </li>
                    <li
                        onClick={(event) => handleFormatChange(event)}
                        value="hexNo
                        Hash">HEX (AA1923)
                    </li>
                    <li
                        onClick={(event) => handleFormatChange(event)}
                        value="rgb">
                        RGB - (1,2,3)
                    </li>
                    <li
                        onClick={(event) => handleFormatChange(event)}
                        value="rgba">
                        RGBA - (1,2,3,0.4)
                    </li>
                </ul>
            </div>
            <div className="sound-btn" onClick={onClick}>Sound {`${isMuted ? 'Off 🔇' : 'On 🔊'}`}</div>
        </header>
    );
};

export default PaletteHeader;