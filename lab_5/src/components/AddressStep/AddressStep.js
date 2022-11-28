import React from 'react';
import {useFormContext} from 'react-hook-form';
import StepIndicator from '../StepIndicator';
import StepInfo from '../StepInfo';
import FieldGroup from '../FieldGroup';
import Button from '../Button';
import FieldGroupInfo from '../FieldGroupInfo';
import CountryCityFields from '../CountryCityFields';
import {AiOutlineCheck} from 'react-icons/ai';
import FormFieldError from '../FormFieldError';

const formIndicatorStep = 3;

export const AddressStep = () => {
    const {register, formState: {errors}} = useFormContext();

    return (
        <>
            <StepIndicator formStep={formIndicatorStep}/>
            <StepInfo
                title="Profile info"
                description="Fill in the data for profile. It will take a couple of minutes. You only need a passport"/>
            <FieldGroup>
                <FieldGroupInfo title="Delivery address" label="Used for shipping orders"/>
                <div className="field-wrap">
                    <p className="input-label">Address</p>
                    <input {...register('address', {
                        required: 'Address field is required.'
                    })}
                           type="text"
                           className="text-input"/>
                    {errors.address && <FormFieldError errorMessage={errors.address.message}/>}
                </div>
                <CountryCityFields label="Location"
                                   countryFieldName="addressCountry"
                                   cityFieldName="addressCity"/>
                <div className="field-wrap">
                    <p className="input-label">Zipcode</p>
                    <input {...register('addressZip', {
                        required: 'Zipcode field is required.'
                    })}
                           type="text"
                           className="text-input"/>
                    {errors.addressZip && <FormFieldError errorMessage={errors.addressZip.message}/>}
                </div>
                <div className="field-wrap">
                    <p className="input-label">Optional</p>
                    <input {...register('addressOptional')} type="text" className="text-input"/>
                </div>
            </FieldGroup>
            <Button buttonType="submit"
                    prefixIcon={<AiOutlineCheck/>}
                    className="btn filled-btn"
                    value="Save"/>
        </>
    );
};
