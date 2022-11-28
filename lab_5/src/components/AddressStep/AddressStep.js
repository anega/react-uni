import React from 'react';
import {useFormContext} from 'react-hook-form';
import StepIndicator from '../StepIndicator';
import StepInfo from '../StepInfo';
import FieldGroup from '../FieldGroup';
import Button from '../Button';
import FieldGroupInfo from '../FieldGroupInfo';
import CountryCityFields from '../CountryCityFields';
import {AiOutlineCheck} from 'react-icons/ai';

const formIndicatorStep = 3;

export const AddressStep = () => {
    const {register} = useFormContext();

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
                    <input {...register('address.address')} type="text" className="text-input"/>
                </div>
                <CountryCityFields label="Location"
                                   countryFieldName="address.country"
                                   cityFieldName="address.city"/>
                <div className="field-wrap">
                    <p className="input-label">Zipcode</p>
                    <input {...register('address.zip')} type="text" className="text-input"/>
                </div>
                <div className="field-wrap">
                    <p className="input-label">Optional</p>
                    <input {...register('address.optional')} type="text" className="text-input"/>
                </div>
            </FieldGroup>
            <Button buttonType="submit"
                    prefixIcon={<AiOutlineCheck/>}
                    className="btn filled-btn"
                    value="Save"/>
        </>
    );
};


// назву країни в обєкт а значенням міста