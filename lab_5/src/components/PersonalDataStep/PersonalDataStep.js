import React from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import StepIndicator from '../StepIndicator';
import StepInfo from '../StepInfo';
import FieldGroup from '../FieldGroup';
import FieldGroupInfo from '../FieldGroupInfo';
import InfoFieldGroup from '../InfoFieldGroup';
import Button from '../Button';
import {AiOutlineArrowRight, AiOutlineCheck} from 'react-icons/ai';
import './PersonalDataStep.css';
import CountryCityFields from '../CountryCityFields';
import FormFieldError from '../FormFieldError';

const formIndicatorStep = 1;
const nextFormStep = 5;

export const PersonalDataStep = ({handleNextStep}) => {
    const {register, control, formState: {errors, isDirty, isValid}} = useFormContext();

    return (
        <>
            <StepIndicator formStep={formIndicatorStep}/>
            <StepInfo
                title="Profile info"
                description="Fill in the data for profile. It will take a couple of minutes. You only need a passport"/>
            <label htmlFor="terms" className="inline-checkbox">
                <input {...register('termsofuse', {
                    required: 'This field is required.'
                })} id="terms" type="checkbox"/>
                <span>I agree with <a href="https://www.google.com/" target="_blank"
                                      rel="noreferrer">Terms of use</a></span>
            </label>
            {errors.termsofuse && <FormFieldError errorMessage={errors.termsofuse.message}/>}
            <FieldGroup>
                <FieldGroupInfo title="Personal data" label="Specify exactly as in your passport"/>
                <div className="field-wrap">
                    <p className="input-label">First name</p>
                    <input {...register('firstName', {
                        required: 'First name is required.'
                    })} type="text" className="text-input"/>
                    {errors.firstName && <FormFieldError errorMessage={errors.firstName.message}/>}
                </div>
                <div className="field-wrap">
                    <p className="input-label">Second name</p>
                    <input {...register('secondName', {
                        required: 'Second name is required.'
                    })} type="text" className="text-input"/>
                    {errors.secondName && <FormFieldError errorMessage={errors.secondName.message}/>}
                </div>
                <CountryCityFields label="Place of birth"
                                   countryFieldName="birthCountry"
                                   cityFieldName="birthCity"/>
                <div className="field-wrap">
                    <p className="input-label">Date of birth</p>
                    <Controller
                        control={control}
                        name="birthDate"
                        render={({field}) => (
                            <DatePicker wrapperClassName="date-picker"
                                        selected={field.value}
                                        dateFormat="dd.MM.yyyy"
                                        onChange={field.onChange}/>
                        )}/>
                </div>
            </FieldGroup>
            <InfoFieldGroup mainText="123-45-678"
                            label="Your ITIN"
                            labelIcon={<AiOutlineCheck/>}/>
            <Button className="btn outline-btn"
                    value="Go Next"
                    icon={<AiOutlineArrowRight size="14" color="#242731"/>}
                    onClick={() => {
                        // console.log(isValid)
                        // console.log(isDirty)
                        if (isValid && isDirty) handleNextStep(nextFormStep);
                    }}/>
        </>
    );
};
