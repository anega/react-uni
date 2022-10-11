import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import data from '../../data/pallete.json';
import PaletteDetails from "../../components/PaletteDetails/PaletteDetails";
import PaletteHeader from "../../components/PaletteHeader/PaletteHeader";
import PaletteFooter from "../../components/PaletteFooter/PaletteFooter";
import './PalettePageLayout.css';

const PalettePageLayout = () => {
    const [isMuted, setIsMuted] = useState(localStorage.getItem('isMuted') || false);
    const params = useParams();
    const palette = getPalette(params.id);

    useEffect(() => {
        document.title = palette.emoji + ' ' + palette.paletteName + ' FlatUI Colors';
    }, [palette]);

    useEffect(() => {
        setIsMuted(JSON.parse(window.localStorage.getItem('isMuted')));
    }, []);

    useEffect(() => {
        window.localStorage.setItem('isMuted', isMuted.toString());
    }, [isMuted]);

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