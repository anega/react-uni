import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './PaletteHeader.css';
import {formats} from '../../data/colorFormatConstants';

const PaletteHeader = ({isMuted, soundAction, colorFormatData, formatChangeAction}) => {
    const [showDropdown, setShowDropdown] = useState(false);

    function handleShowDropdown() {
        setShowDropdown((prevState) => !prevState);
    }

    return (
        <header className="palette-header">
            <Link to={".."} className="palette-back-btn">⟵ Back</Link>
            <div className={`color-format ${showDropdown ? 'show' : ''}`} onClick={handleShowDropdown}>
                <p className="active-color-format">Copy Format: {colorFormatData.colorFormatMessage}</p>
                <ul className="color-format-list">
                    <li
                        onClick={(event) => formatChangeAction(event)}
                        data-value={formats.hex}>
                        HEX (#AA1923)
                    </li>
                    <li
                        onClick={(event) => formatChangeAction(event)}
                        data-value={formats.hexNoHash}>
                        HEX (AA1923)
                    </li>
                    <li
                        onClick={(event) => formatChangeAction(event)}
                        data-value={formats.rgb}>
                        RGB - (1,2,3)
                    </li>
                    <li
                        onClick={(event) => formatChangeAction(event)}
                        data-value={formats.rgba}>
                        RGBA - (1,2,3,0.4)
                    </li>
                </ul>
            </div>
            <div className="sound-btn" onClick={soundAction}>Sound {`${isMuted ? 'Off 🔇' : 'On 🔊'}`}</div>
        </header>
    );
};

export default PaletteHeader;