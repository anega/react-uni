import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import data from '../../data/pallete.json';
import PaletteDetails from "../../components/PaletteDetails/PaletteDetails";
import PaletteHeader from "../../components/PaletteHeader/PaletteHeader";
import PaletteFooter from "../../components/PaletteFooter/PaletteFooter";
import './PalettePageLayout.css';
import {formats} from "../../data/colorFormatConstants";

const PalettePageLayout = () => {
    const [isMuted, setIsMuted] = useState(localStorage.getItem('isMuted') || false);
    const [colorFormat, setColorFormat] = useState({
        colorFormatValue: formats.hex,
        colorFormatMessage: 'HEX (#AA1923)'
    });
    // const [colorFormat, setColorFormat] = useState(formats.hex);
    // const [copyFormatText, setCopyFormatText] = useState('HEX (#AA1923)');
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

    function handleColorFormat(event) {
        const newValue = event.target.dataset.value;
        const newMessage = event.target.textContent;
        setColorFormat(() => {
            return {
                colorFormatValue: newValue,
                colorFormatMessage: newMessage,
            };
        });
    }

    function getPalette(id) {
        return data.find((palette) => palette.id === id);
    }

    return (
        <div className="palette-page">
            <PaletteHeader
                isMuted={isMuted}
                soundAction={handleSound}
                colorFormatData={colorFormat}
                formatChangeAction={handleColorFormat}/>
            <PaletteDetails palette={palette} isMuted={isMuted} colorFormat={colorFormat.colorFormatValue}/>
            <PaletteFooter palette={palette}/>
        </div>
    );
};

export default PalettePageLayout;