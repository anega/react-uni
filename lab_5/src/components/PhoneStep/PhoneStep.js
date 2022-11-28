import React, {useCallback} from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import {PatternFormat} from 'react-number-format';
import clsx from 'clsx';
import StepIndicator from '../StepIndicator';
import StepInfo from '../StepInfo';
import InfoMessage from '../InfoMessage';
import FieldGroup from '../FieldGroup';
import CustomSelect from '../CustomSelect';
import Button from '../Button';
import FormFieldError from '../FormFieldError';
import {MdLock, MdOutlineClose} from 'react-icons/md';
import './PhoneStep.css';
import countryCodes from 'data/country-codes.json';

const formIndicatorStep = 1;
const nextFormStep = 2;

export const PhoneStep = ({handleNextStep}) => {
    const {control, formState: {errors, isValid, isDirty}} = useFormContext();
    const countryCodesOptions = countryCodes.map((country) => {
        return {
            value: country.phone_code,
            label: country.phone_code,
            countryName: country.country_name
        };
    });

    const customFilter = useCallback((option, input) => {
        if (input === '') return true;
        return !!(option.value.includes(input) ||
            option.data.countryName.toLowerCase().includes(input.toLowerCase()));
    }, []);

    return (
        <>
            <StepIndicator formStep={formIndicatorStep}/>
            <StepInfo
                title="Registration"
                description="Fill in the registration data. It will take a couple of minutes. All you need is a phone number and e-mail"/>
            <InfoMessage
                prefixIcon={<MdLock/>}
                message="We take privacy issues seriously. You can be sure that your personal data is securely protected."
                suffixIcon={<MdOutlineClose/>}/>
            <FieldGroup>
                <p className="input-label">Enter your phone number</p>
                <div className="phone-wrap">
                    <Controller
                        control={control}
                        name="phoneRegister.countryCode"
                        defaultValue={countryCodesOptions[0].value}
                        rules={{required: true}}
                        render={({field}) => (
                            <CustomSelect onChange={field.onChange}
                                          options={countryCodesOptions}
                                          filter={customFilter}/>
                        )}/>
                    <Controller
                        control={control}
                        name="phoneRegister.phone"
                        rules={{
                            required: 'Phone number cannot be empty.',
                            validate: {
                                value: (value) => value.trim().length > 4 ||
                                    'Phone number must be at least 4 numbers long.'
                            }
                        }}
                        render={({field}) => (
                            <PatternFormat onChange={field.onChange}
                                           format="### ### ####"
                                           valueIsNumericString
                                           className={clsx('text-input', errors.phoneRegister && 'invalid')}/>
                        )}/>
                </div>
                {errors.phoneRegister && <FormFieldError errorMessage={errors.phoneRegister.phone.message}/>}
            </FieldGroup>
            <Button className="btn outline-btn"
                    value="Send Code"
                    onClick={() => {
                        if (isValid && isDirty) handleNextStep(nextFormStep);
                    }}/>
        </>
    );
};
