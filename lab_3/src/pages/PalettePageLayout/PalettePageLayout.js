import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import data from '../../data/pallete.json';
import PaletteDetails from "../../components/PaletteDetails/PaletteDetails";
import PaletteHeader from "../../components/PaletteHeader/PaletteHeader";
import PaletteFooter from "../../components/PaletteFooter/PaletteFooter";
import './PalettePageLayout.css';

const PalettePageLayout = () => {
    const [isMuted, setIsMuted] = useState(false);
    const params = useParams();
    const palette = getPalette(params.id);

    function handleSound() {
        setIsMuted((prevState) => !prevState);
    }

    function getPalette(id) {
        return data.find((palette) => palette.id === id);
    }

    return (
        <div className="palette-page">
            <PaletteHeader isMuted={isMuted} onClick={handleSound}/>
            <PaletteDetails palette={palette} isMuted={isMuted}/>
            <PaletteFooter palette={palette}/>
        </div>
    );
};

export default PalettePageLayout;