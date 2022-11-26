import React from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import AsyncSelect from 'react-select/async';
import {getCities, getCountries} from '../../services/LocationService';
import StepIndicator from '../StepIndicator';
import StepInfo from '../StepInfo';
import FieldGroup from '../FieldGroup';
import FieldGroupInfo from '../FieldGroupInfo';
import './PersonalDataStep.css';

const formIndicatorStep = 1;
const nextFormStep = 5;

export const PersonalDataStep = ({handleNextStep}) => {
    const {register, watch, control} = useFormContext();
    const country = watch('birthCountry');

    const fetchCountries = async (inputValue) => {
        return await getCountries().then((res) => {
            return [...res.data]
                .filter((r) => r.name.toLowerCase().includes(inputValue))
                .map(country => ({value: country.name.toLowerCase(), label: country.name}))
                .sort((a, b) => (a.value > b.value) ? 1 : ((b.value > a.value) ? -1 : 0));
        });
    };

    const loadCountryOptions = (inputValue, callback) => {
        setTimeout(async () => {
            callback(await fetchCountries(inputValue));
        }, 1000);
    };

    const fetchCities = async (inputValue) => {
        if (country) {
            return await getCities(country.value).then((res) => {
                return [...res.data]
                    .filter((city) => city.toLowerCase().includes(inputValue))
                    .map(city => ({value: city.toLowerCase(), label: city}))
                    .sort((a, b) => (a.value > b.value) ? 1 : ((b.value > a.value) ? -1 : 0));
            })
        }
    };

    const loadCityOptions = (inputValue, callback) => {
        setTimeout(async () => {
            callback(await fetchCities(inputValue));
        }, 1000);
    };

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
                    <input {...register} type="firstName" className="text-input"/>
                </div>
                <div className="field-wrap">
                    <p className="input-label">Second name</p>
                    <input {...register} type="secondName" className="text-input"/>
                </div>
                <div className="field-wrap">
                    <p className="input-label">Place of birth</p>
                    <div className="place-birth-wrap">
                        <Controller
                            control={control}
                            name="birthCountry"
                            render={({field}) => (
                                <AsyncSelect defaultOptions
                                             cacheOptions
                                             onChange={field.onChange}
                                             loadOptions={loadCountryOptions}/>
                            )}/>
                        <Controller
                            control={control}
                            name="birthCity"
                            render={({field}) => (
                                <AsyncSelect key={JSON.stringify(country)}
                                             cacheOptions
                                             defaultOptions
                                             onChange={field.onChange}
                                             loadOptions={loadCityOptions}/>
                            )}/>
                    </div>
                </div>
            </FieldGroup>
        </>
    );
};
