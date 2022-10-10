import React from 'react';
import paletteList from "../../data/pallete.json";
import PaletteListItem from "../PaletteListItem/PaletteListItem";
import './PaletteList.css';

const PaletteList = () => (
    <div className="palette-list">
        {paletteList.map((item) => (
            <PaletteListItem key={item.id} palette={item}/>
        ))}
    </div>
);

export default PaletteList;