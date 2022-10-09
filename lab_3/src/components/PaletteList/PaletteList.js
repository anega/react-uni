import React from 'react';
import paletteList from "../../data/pallete.json";
import Palette from "../Palette/Palette";

const PaletteList = () => (
    <div className="palette-list">
        {paletteList.map((item) => (
            <Palette key={item.id} palette={item}/>
        ))}
    </div>
);

export default PaletteList;