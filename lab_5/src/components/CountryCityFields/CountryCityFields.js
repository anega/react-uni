import React, {useState} from 'react';
import {debounce} from 'lodash';
import {Controller, useFormContext} from 'react-hook-form';
import {getCities, getCountries} from '../../services/LocationService';
import {CustomAsyncSelect} from '../CustomSelect/CustomAsyncSelect';
import FormFieldError from '../FormFieldError';
import './CountryCityFields.css';

export const CountryCityFields = ({label, countryFieldName, cityFieldName}) => {
    const [cachedCities, setCachedCities] = useState({});
    const {watch, control, formState: {errors}} = useFormContext();
    const country = watch(countryFieldName);

    const fetchCountries = async (inputValue) => {
        return await getCountries().then((res) => {
            return [...res.data]
                .filter((country) => country.name.toLowerCase().includes(inputValue.toLowerCase()))
                .map(country => ({value: country.Iso2, label: country.name}))
                .sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        });
    };

    const loadCountryOptions = debounce((inputValue, callback) => {
        fetchCountries(inputValue).then((options) => callback(options));
    }, 1000);

    const fetchCities = async (inputValue) => {
        const selectedCountryCode = country.value;
        if (cachedCities.hasOwnProperty(selectedCountryCode)) {
            return [...cachedCities[selectedCountryCode]]
                .filter((city) => city.value.includes(inputValue));
        }
        return await getCities(selectedCountryCode).then((res) => {
            const cities = [...res.data]
                .filter((city) => city.toLowerCase().includes(inputValue))
                .map(city => ({value: city.toLowerCase(), label: city}))
                .sort((a, b) => (a.value > b.value) ? 1 : ((b.value > a.value) ? -1 : 0));
            setCachedCities((prevState) => {
                return {
                    ...prevState,
                    [selectedCountryCode]: cities,
                };
            });
            return cities;
        })
    };

    const loadCityOptions = debounce((inputValue, callback) => {
        if (!country) return callback([]);
        fetchCities(inputValue).then((options) => callback(options));
    }, 1000);

    return (
        <div className="field-wrap">
            <p className="input-label">{label}</p>
            <div className="place-birth-wrap">
                <div>
                    <Controller
                        control={control}
                        name={countryFieldName}
                        rules={{
                            required: 'Country field is required.'
                        }}
                        render={({field}) => (
                            <CustomAsyncSelect placeholder="Country"
                                               onChange={field.onChange}
                                               loadOptions={loadCountryOptions}/>
                        )}/>
                    {errors[countryFieldName] && <FormFieldError errorMessage={errors[countryFieldName].message}/>}
                </div>
                <div>
                    <Controller
                        control={control}
                        name={cityFieldName}
                        rules={{
                            required: 'City field is required.'
                        }}
                        render={({field}) => {
                            return <CustomAsyncSelect componentKey={JSON.stringify(country)}
                                                      placeholder="City"
                                                      onChange={field.onChange}
                                                      loadOptions={loadCityOptions}/>
                        }}/>
                    {errors[cityFieldName] && <FormFieldError errorMessage={errors[cityFieldName].message}/>}
                </div>
            </div>
        </div>
    );
};
