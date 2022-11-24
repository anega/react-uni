import React, {useState} from 'react';
import Header from 'components/Header';
import './Layout.css';
import PhoneStep from '../../components/PhoneStep';

export const Layout = () => {
    const [step, setStep] = useState(0);

    const handleNextStep = () => {
        setStep((prevState) => prevState++);
    };

    return (
        <>
            <Header/>
            <div className="content">
                <form action="">
                    {step === 0 && <PhoneStep handleNextStep={handleNextStep}/>}
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
