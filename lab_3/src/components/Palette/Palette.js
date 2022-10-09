import React from 'react';
import PaletteColorsPreview from "../PaletteColorsPreview/PaletteColorsPreview";

const Palette = ({palette}) => (
    <div>
        <PaletteColorsPreview colors={palette.colors}/>
        <div className="palette-info">
            <h2>{palette.paletteName}</h2>
            <span className="palette-emoji">{palette.emoji}</span>
        </div>
    </div>
);

export default Palette;