import React, {useState} from 'react';
import './InfoMessage.css';

export const InfoMessage = ({prefixIcon, message, suffixIcon}) => {
    const [showMsg, setShowMsg] = useState(true);

    const handleShowMsg = () => setShowMsg(false);

    return (
        <div className={`info-msg ${showMsg ? '' : 'hidden'}`}>
            {prefixIcon && <div className="message-prefix-icon">{prefixIcon}</div>}
            <p>{message}</p>
            {suffixIcon && <div className="message-suffix-icon" onClick={handleShowMsg}>{suffixIcon}</div>}
        </div>
    );
};
