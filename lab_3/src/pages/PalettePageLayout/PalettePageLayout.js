import React from 'react';
import {useParams} from "react-router-dom";
import data from '../../data/pallete.json';
import PaletteDetails from "../../components/PaletteDetails/PaletteDetails";
import PaletteHeader from "../../components/PaletteHeader/PaletteHeader";

const PalettePageLayout = () => {
    const params = useParams();
    const palette = getPalette(params.id);

    function getPalette(id) {
        return data.find((palette) => palette.id === id);
    }

    return (
        <>
            <PaletteHeader/>
            <hr/>
            <PaletteDetails palette={palette}/>
            <hr/>
            <h1>Palette Page Footer</h1>
        </>
    );
};

export default PalettePageLayout;