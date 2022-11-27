import React, {useState} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import Header from 'components/Header';
import PhoneStep from '../../components/PhoneStep';
import ConfirmPhoneStep from '../../components/ConfirmPhoneStep';
import EmailPassStep from '../../components/EmailPassStep';
import PersonalDataStep from '../../components/PersonalDataStep';
import './Layout.css';

export const Layout = () => {
    const methods = useForm();
    const [step, setStep] = useState(1);

    const handleNextStep = (step) => {
        setStep(step);
    };

    const onSubmit = (formData) => {
        console.log(formData)
    };

    return (
        <>
            <Header/>
            <div className="content container-px">
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        {step === 1 && <PhoneStep handleNextStep={handleNextStep}/>}
                        {step === 2 && <ConfirmPhoneStep handleNextStep={handleNextStep}/>}
                        {step === 3 && <EmailPassStep handleNextStep={handleNextStep}/>}
                        {step === 4 && <PersonalDataStep handleNextStep={handleNextStep}/>}
                        <div>step 5</div>
                        <div>step 6</div>
                        <button type="submit">button</button>
                    </form>
                </FormProvider>
            </div>
        </>
    );
};
