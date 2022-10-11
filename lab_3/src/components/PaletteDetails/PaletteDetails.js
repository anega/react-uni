import React, {useEffect, useState} from 'react';
import './PaletteDetails.css';
import CopiedOverlay from "../CopiedOverlay/CopiedOverlay";

const PaletteDetails = ({palette}) => {
    const [copied, setCopied] = useState({
        showOverlay: false,
        showText: false,
        message: 'Copied!',
        color: ''
    });

    const copiedMessages = [
        'Copied!',
        'Paste me!',
        'It\'ll rock!',
        'Will do!',
        'Got it!',
        'Right one!',
    ];

    function setCopiedInfo(color) {
        const newState = {
            showOverlay: true,
            showText: true,
            message: '',
            color: color
        };

        navigator.clipboard.writeText(color)
            .then(() => {
                setCopied((prevState) => {
                    return {
                        ...newState,
                        message: copiedMessages[Math.floor(Math.random() * copiedMessages.length)],
                    };
                });
            }, () => {
                setCopied((prevState) => {
                    return {
                        ...newState,
                        message: 'Can\'t copy color',
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
                     onClick={() => setCopiedInfo(color.color)}
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