import React from 'react';
import './PaletteFooter.css';

const PaletteFooter = ({palette}) => (
    <footer className="palette-footer">
        <p>{palette.paletteName} from {palette.emoji}</p>
    </footer>
);

export default PaletteFooter;