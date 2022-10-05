import React from 'react';
import './RoundedButtonLink.css'

const RoundedButtonLink = (props) => (
    <a href={props.link} className={props.className}>{props.text}</a>
);

export default RoundedButtonLink;