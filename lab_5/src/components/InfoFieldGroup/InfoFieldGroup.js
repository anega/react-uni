import React from 'react';
import FieldGroup from '../FieldGroup';
import './InfoFieldGroup.css';

export const InfoFieldGroup = ({mainText, label, labelIcon, trailingIcon}) => {
    return (
        <>
            <FieldGroup className="info-group">
                <div className="info-body">
                    <p className="info-main">{mainText}</p>
                    <p className="info-label">{labelIcon} {label}</p>
                </div>
                {trailingIcon}
            </FieldGroup>
        </>
    );
};
