import React from 'react';
import {useParams} from "react-router-dom";
import data from '../../data/pallete.json';
import PaletteDetails from "../../components/PaletteDetails/PaletteDetails";
import PaletteHeader from "../../components/PaletteHeader/PaletteHeader";
import PaletteFooter from "../../components/PaletteFooter/PaletteFooter";

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
            <PaletteFooter palette={palette}/>
        </>
    );
};

export default PalettePageLayout;