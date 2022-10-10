import React from 'react';
import PaletteColorsPreview from "../PaletteColorsPreview/PaletteColorsPreview";
import './PaletteListItem.css';
import {Link} from "react-router-dom";

const PaletteListItem = ({palette}) => (
        <Link to={`palette/${palette.id}`} className="palette-item">
            <PaletteColorsPreview colors={palette.colors}/>
            <div className="palette-info">
                <h2>{palette.paletteName}</h2>
                <span className="palette-emoji">{palette.emoji}</span>
            </div>
        </Link>
);

export default PaletteListItem;