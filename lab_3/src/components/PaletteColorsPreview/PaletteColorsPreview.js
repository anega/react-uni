import React from 'react';
import './PaletteColorsPreview.css';

const PaletteColorsPreview = ({colors}) => (
    <div className="palette-preview">
        {colors.map((color) => (
            <div className="preview-color" key={color.color} style={{backgroundColor: `${color.color}`}}></div>
        ))}
    </div>
);

export default PaletteColorsPreview;