import React, {useCallback} from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import {debounce} from 'lodash';
import {getCities, getCountries} from '../../services/LocationService';
import StepIndicator from '../StepIndicator';
import StepInfo from '../StepInfo';
import FieldGroup from '../FieldGroup';
import FieldGroupInfo from '../FieldGroupInfo';
import InfoFieldGroup from '../InfoFieldGroup';
import {CustomAsyncSelect} from '../CustomSelect/CustomAsyncSelect';
import Button from '../Button';
import {AiOutlineArrowRight, AiOutlineCheck} from 'react-icons/ai';
import './PersonalDataStep.css';

const formIndicatorStep = 1;
const nextFormStep = 5;

export const PersonalDataStep = ({handleNextStep}) => {
    const {register, watch, control} = useFormContext();
    const country = watch('birth.country');

    const fetchCountries = async (inputValue) => {
        return await getCountries().then((res) => {
            return [...res.data]
                .filter((country) => country.name.toLowerCase().includes(inputValue.toLowerCase()))
                .map(country => ({value: country.Iso2, label: country.name}))
                .sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        });
    };

    const loadCountryOptions = useCallback(
        debounce((inputValue, callback) => {
            fetchCountries(inputValue).then((options) => callback(options));
        }, 1000),
        []
    );

    const fetchCities = async (inputValue) => {
        return await getCities(country.value).then((res) => {
            return [...res.data]
                .filter((city) => city.toLowerCase().includes(inputValue))
                .map(city => ({value: city.toLowerCase(), label: city}))
                .sort((a, b) => (a.value > b.value) ? 1 : ((b.value > a.value) ? -1 : 0));
        })
    };

    const loadCityOptions = useCallback(
        debounce((inputValue, callback) => {
            if (!country) return callback([]);
            fetchCities(inputValue).then((options) => callback(options));
        }, 1000),
        [country]
    );

    return (
        <>
            <StepIndicator formStep={formIndicatorStep}/>
            <StepInfo
                title="Profile info"
                description="Fill in the data for profile. It will take a couple of minutes. You only need a passport"/>
            <label htmlFor="terms" className="inline-checkbox">
                <input id="terms" type="checkbox"/>
                <span>I agree with <a href="https://www.google.com/" target="_blank"
                                      rel="noreferrer">Terms of use</a></span>
            </label>
            <FieldGroup>
                <FieldGroupInfo title="Personal data" label="Specify exactly as in your passport"/>
                <div className="field-wrap">
                    <p className="input-label">First name</p>
                    <input {...register('firstName')} type="text" className="text-input"/>
                </div>
                <div className="field-wrap">
                    <p className="input-label">Second name</p>
                    <input {...register('secondName')} type="text" className="text-input"/>
                </div>
                <div className="field-wrap">
                    <p className="input-label">Place of birth</p>
                    <div className="place-birth-wrap">
                        <Controller
                            control={control}
                            name="birth.country"
                            render={({field}) => (
                                <CustomAsyncSelect placeholder="Country"
                                                   onChange={field.onChange}
                                                   loadOptions={loadCountryOptions}/>
                            )}/>
                        <Controller
                            control={control}
                            name="birth.city"
                            render={({field}) => (
                                <CustomAsyncSelect componentKey={JSON.stringify(country)}
                                                   placeholder="City"
                                                   onChange={field.onChange}
                                                   loadOptions={loadCityOptions}/>
                            )}/>
                    </div>
                </div>
                <div className="field-wrap">
                    <p className="input-label">Date of birth</p>
                    <input {...register('birth.date')} type="text" className="text-input"/>
                </div>
            </FieldGroup>
            <InfoFieldGroup mainText="123-45-678"
                            label="Your ITIN"
                            labelIcon={<AiOutlineCheck/>}/>
            <Button className="btn outline-btn" value="Go Next"
                    icon={<AiOutlineArrowRight size="14" color="#242731"/>}
                    onClick={() => handleNextStep(nextFormStep)}/>
        </>
    );
};
