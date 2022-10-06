import React from 'react';
import {faqList} from '../../data/accordionData';
import AccordionItem from "./AccordionItem";

const Accordion = () => {
    return (
        <div className="accordion">
            {faqList.map((faqItem) => (
                <AccordionItem key={faqItem.index} faqItem={faqItem}/>
            ))}
        </div>
    );
};

export default Accordion;