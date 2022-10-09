import React from 'react';

const PaletteColorsPreview = ({colors}) => (
    <div>
        {colors.map((color) => (
            <span style={{width: '45px', height: '16px', backgroundColor: `${color.color}`}}>{color.name}</span>
        ))}
    </div>
);

export default PaletteColorsPreview;