import React from 'react';
import {MdLock, MdOutlineClose} from 'react-icons/md';
import Header from 'components/Header';
import StepIndicator from 'components/StepIndicator';
import StepInfo from 'components/StepInfo';
import InfoMessage from 'components/InfoMessage';
import './Layout.css';
import FieldGroup from '../../components/FieldGroup';

export const Layout = () => {
    return (
        <>
            <Header/>
            <div className="content">
                <StepIndicator/>
                <StepInfo
                    title="Registration"
                    description="Fill in the registration data. It will take a couple of minutes. All you need is a phone number and e-mail"/>
                <InfoMessage
                    prefixIcon={<MdLock/>}
                    message="We take privacy issues seriously. You can be sure that your personal data is securely protected."
                    suffixIcon={<MdOutlineClose/>}/>
                <FieldGroup>
                    <p className="input-label">Enter your phone number</p>
                </FieldGroup>
                <form action="">
                    <div>step 1</div>
                    <div>step 2</div>
                    <div>step 3</div>
                    <div>step 4</div>
                    <div>step 5</div>
                    <div>step 6</div>
                    <button>button</button>
                </form>
            </div>
        </>
    );
};
