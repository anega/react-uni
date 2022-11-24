import React, {useCallback} from 'react';
import {PatternFormat} from 'react-number-format';
import StepIndicator from '../StepIndicator';
import StepInfo from '../StepInfo';
import InfoMessage from '../InfoMessage';
import FieldGroup from '../FieldGroup';
import CustomSelect from '../CustomSelect';
import Button from '../Button';
import {MdLock, MdOutlineClose} from 'react-icons/md';
import './PhoneStep.css';
import countryCodes from 'data/country-codes.json';

export const PhoneStep = ({handleNextStep}) => {
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
        <div>
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
                <div className="phone-wrap">
                    {/* TODO: handle with react-hook-form */}
                    <CustomSelect options={countryCodesOptions} filter={customFilter}/>
                    <PatternFormat  format="### ### ####" valueIsNumericString className="text-input"/>
                </div>
            </FieldGroup>
            <Button className="outline-btn" value="Send Code" onClick={handleNextStep}/>
        </div>
    );
};
