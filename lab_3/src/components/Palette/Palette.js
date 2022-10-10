import React from 'react';
import PaletteColorsPreview from "../PaletteColorsPreview/PaletteColorsPreview";
import './Palette.css';
import {Link} from "react-router-dom";

const Palette = ({palette}) => (
        <Link to="/" className="palette-item">
            <PaletteColorsPreview colors={palette.colors}/>
            <div className="palette-info">
                <h2>{palette.paletteName}</h2>
                <span className="palette-emoji">{palette.emoji}</span>
            </div>
        </Link>
);

export default Palette;