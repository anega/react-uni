import React from 'react';
import './PaletteDetails.css';

const PaletteDetails = ({palette}) => (
    <div className="palette-details-colors">
        {palette.colors.map((color) => (
            <div key={color.name}
                 style={{background: color.color}}
                 className="palette-color">
                <p>{color.name}</p>
                <span className="copy-color-btn">COPY</span>
            </div>
        ))}
    </div>
);

export default PaletteDetails;