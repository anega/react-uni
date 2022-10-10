import React from 'react';
import {useParams} from "react-router-dom";
import data from '../../data/pallete.json';
import PaletteDetails from "../../components/PaletteDetails/PaletteDetails";
import PaletteHeader from "../../components/PaletteHeader/PaletteHeader";
import PaletteFooter from "../../components/PaletteFooter/PaletteFooter";
import './PalettePageLayout.css';

const PalettePageLayout = () => {
    const params = useParams();
    const palette = getPalette(params.id);

    function getPalette(id) {
        return data.find((palette) => palette.id === id);
    }

    return (
        <div className="palette-page">
            <PaletteHeader/>
            <PaletteDetails palette={palette}/>
            <PaletteFooter palette={palette}/>
        </div>
    );
};

export default PalettePageLayout;