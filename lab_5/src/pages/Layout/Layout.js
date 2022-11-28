import React, {useState} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import Header from 'components/Header';
import PhoneStep from '../../components/PhoneStep';
import ConfirmPhoneStep from '../../components/ConfirmPhoneStep';
import EmailPassStep from '../../components/EmailPassStep';
import PersonalDataStep from '../../components/PersonalDataStep';
import ContactsStep from '../../components/ContactsStep';
import AddressStep from '../../components/AddressStep';
import './Layout.css';

export const Layout = () => {
    const methods = useForm({
        defaultValues: {
            socialLinks: [{
                profileName: ''
            }]
        }
    });
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
                        {step === 5 && <ContactsStep handleNextStep={handleNextStep}/>}
                        {step === 6 && <AddressStep/>}
                    </form>
                </FormProvider>
            </div>
        </>
    );
};
