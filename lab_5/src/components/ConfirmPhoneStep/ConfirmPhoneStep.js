import React, {useEffect, useState} from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import {PatternFormat} from 'react-number-format';
import StepIndicator from '../StepIndicator';
import StepInfo from '../StepInfo';
import Button from '../Button';
import InfoFieldGroup from '../InfoFieldGroup';
import {BsFillPencilFill} from 'react-icons/bs';
import {IoMdRefresh} from 'react-icons/io';
import './ConfirmPhoneStep.css';

const formIndicatorStep = 2;
const nextFormStep = 3;

export const ConfirmPhoneStep = ({handleNextStep}) => {
    const [confirmationCode, setConfirmationCode] = useState('');
    const {getValues, control} = useFormContext();
    const phoneNumber = getValues(['countryCode', 'phoneNumber']).join(' ');

    const handleConfirmationCode = () => {
        let i = 0;
        let code = '';
        while (i < 4) {
            i++;
            code = code + Math.floor(Math.random() * 10);
        }
        setConfirmationCode(code);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            handleConfirmationCode();
        }, 1200);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <StepIndicator formStep={formIndicatorStep}/>
            <StepInfo
                title="Registration"
                description="Fill in the registration data. It will take a couple of minutes. All you need is a phone number and e-mail"/>
            <InfoFieldGroup mainText={phoneNumber}
                            label="Number not confirmed yet"
                            trailingIcon={<BsFillPencilFill color="#007AFF" size="18"/>}/>
            <div className="confirmation-code-wrap">
                <p className="input-label">Confirmation code</p>
                <div className="confirmation-code">
                    <div className="confirmation-field">
                        <Controller
                            control={control}
                            name="confirmPhoneNumber"
                            render={() => {
                                return <PatternFormat format="# # # #"
                                                      mask="—"
                                                      value={confirmationCode}
                                                      defaultValue={confirmationCode}
                                                      allowEmptyFormatting={true}
                                                      valueIsNumericString
                                                      className="text-input"/>
                            }}/>
                        <p className="field-description">Confirm phone number with code from sms message</p>
                    </div>
                    <button type="button" className="send-again" onClick={handleConfirmationCode}>
                        <IoMdRefresh color="#007AFF" size="18"/>Send again
                    </button>
                </div>
            </div>
            <Button buttonType="button" className="btn outline-btn" value="Confirm"
                    onClick={() => handleNextStep(nextFormStep)}/>
        </>
    );
};
