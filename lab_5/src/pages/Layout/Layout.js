import React, {useState} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import Header from 'components/Header';
import PhoneStep from '../../components/PhoneStep';
import './Layout.css';

export const Layout = () => {
    const methods = useForm();
    const [step, setStep] = useState(0);
    const [userData, setUserData] = useState({});

    const handleNextStep = () => {
        const formData = methods.getValues();
        setUserData((prevState) => ({
            ...prevState,
            formData,
        }));
        setStep((prevState) => prevState + 1);
    };

    const onSubmit = (formData) => {
        setUserData((prevState) => ({
            ...prevState,
            formData,
        }));
    };

    return (
        <>
            <Header/>
            <div className="content container-px">
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        {step === 0 && <PhoneStep handleNextStep={handleNextStep}/>}
                        {step === 1 && <div>step 2</div>}
                        <div>step 3</div>
                        <div>step 4</div>
                        <div>step 5</div>
                        <div>step 6</div>
                        <button type="submit">button</button>
                    </form>
                </FormProvider>
            </div>
        </>
    );
};
