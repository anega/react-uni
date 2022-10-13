import React, {useEffect, useState} from 'react';
import chroma from 'chroma-js';
import CopiedOverlay from '../CopiedOverlay/CopiedOverlay';
import {formats} from '../../data/colorFormatConstants';
import {copiedMessages} from '../../data/copiedMessages';
import './PaletteDetails.css';
import audioFile from '../../assets/src_notify.mp3';

const PaletteDetails = ({palette, isMuted, colorFormat}) => {
    const [copied, setCopied] = useState({
        showOverlay: false,
        showText: false,
        message: 'Copied!',
        color: '',
        formattedColor: '',
    });

    const audio = new Audio(audioFile);

    function handleCopiedInfo(color) {
        if (!isMuted) {
            audio.play();
        }

        let formattedColorValue;
        switch (colorFormat) {
            case formats.hex:
                formattedColorValue = color;
                break;
            case formats.hexNoHash:
                formattedColorValue = color.slice(1);
                break;
            case formats.rgb:
                formattedColorValue = `rgb(${chroma(color).rgb()})`;
                break;
            case formats.rgba:
                formattedColorValue = `rgba(${chroma(color).rgba()})`;
                break;
            default:
                formattedColorValue = color;
                break;
        }

        navigator.clipboard.writeText(formattedColorValue)
            .then(() => {
                setCopied((prevState) => {
                    return {
                        showOverlay: true,
                        showText: true,
                        message: copiedMessages[Math.floor(Math.random() * copiedMessages.length)],
                        color: color,
                        formattedColor: formattedColorValue,
                    };
                });
            }, () => {
                setCopied((prevState) => {
                    return {
                        showOverlay: true,
                        showText: true,
                        message: 'Can\'t copy color',
                        color: color,
                        formattedColor: formattedColorValue,
                    };
                });
            });
    }

    useEffect(() => {
        if (copied.showText) {
            const showTextInterval = setInterval(() => {
                setCopied((prevState) => ({...prevState, showText: false}))
            }, 500);

            return () => clearInterval(showTextInterval);
        }
    })

    useEffect(() => {
        if (copied.showOverlay) {
            const showOverlayInterval = setInterval(() => {
                setCopied((prevState) => ({...prevState, showOverlay: false}))
            }, 504);

            return () => clearInterval(showOverlayInterval);
        }
    })

    return (
        <div className={`palette-details-colors ${copied.showOverlay ? 'show-copied' : ''}`}>
            {palette.colors.map((color) => (
                <div key={color.name}
                     onClick={() => handleCopiedInfo(color.color)}
                     style={{background: color.color}}
                     className="palette-color">
                    <p>{color.name}</p>
                    <span className="copy-color-btn">COPY</span>
                </div>
            ))}
            <CopiedOverlay copied={copied}/>
        </div>
    );
};

export default PaletteDetails;