import React, {useRef, useState} from 'react';
import './AccordionItem.css';

const AccordionItem = ({faqItem}) => {
    const [isActive, setIsActive] = useState(false);
    const currentEl = useRef();

    const handleClick = () => {
        setIsActive((prevState) => !prevState);
    }

    return (
        <div className={`accordion-item ${isActive ? "active" : ""}`}>
            <div className="accordion-heading">
                <span className="h6 faq-item-number">{faqItem.index}</span>
                <h6>{faqItem.title}</h6>
                <span className="accordion-action" onClick={handleClick}></span>
            </div>
            <div ref={currentEl}
                 className="accordion-body"
                 style={
                     isActive
                         ? {height: currentEl.current.scrollHeight}
                         : {height: "0px"}
                 }
            >
                <p className="label">{faqItem.body}</p>
            </div>
        </div>
    );
};

export default AccordionItem;