import React from 'react';
import {Controller, useFieldArray, useFormContext} from 'react-hook-form';
import StepIndicator from '../StepIndicator';
import StepInfo from '../StepInfo';
import FieldGroupInfo from '../FieldGroupInfo';
import FieldGroup from '../FieldGroup';
import CustomSelect from '../CustomSelect';
import Button from '../Button';
import {BsLinkedin, BsTelephone} from 'react-icons/bs';
import {HiOutlineEnvelope} from 'react-icons/hi2';
import {AiFillSkype, AiOutlineArrowRight, AiOutlineGithub, AiOutlineInstagram, AiOutlinePlus} from 'react-icons/ai';
import {FaFacebook} from 'react-icons/fa';
import {CiCircleRemove} from 'react-icons/ci';
import './ContactsStep.css';

const formIndicatorStep = 2;
const nextFormStep = 6;
const socialNetworkOptions = [
    {
        label: 'Skype',
        value: 'skype',
        icon: <AiFillSkype/>,
    },
    {
        label: 'Facebook',
        value: 'facebook',
        icon: <FaFacebook/>,
    },
    {
        label: 'GitHub',
        value: 'github',
        icon: <AiOutlineGithub/>,
    },
    {
        label: 'Instagram',
        value: 'instagram',
        icon: <AiOutlineInstagram/>,
    },
    {
        label: 'LinkedIn',
        value: 'linkedin',
        icon: <BsLinkedin/>,
    }
];

export const ContactsStep = ({handleNextStep}) => {
    const {register, control, getValues} = useFormContext();
    const {fields, append, remove} = useFieldArray({
        name: 'socialLinks',
        control
    });
    const email = getValues('emailRegister');
    const phoneNumber = getValues(['phoneRegister.countryCode', 'phoneRegister.phone']).join(' ');

    return (
        <>
            <StepIndicator formStep={formIndicatorStep}/>
            <StepInfo
                title="Profile info"
                description="Fill in the data for profile. It will take a couple of minutes. You only need a passport"/>
            <FieldGroup>
                <FieldGroupInfo title="Contacts" label="These contacts are used to inform about orders"/>
                <div className="field-wrap input-icon-prefix">
                    <span className="input-left-icon">
                        <HiOutlineEnvelope size="20" color="#D4D4D4"/>
                    </span>
                    <input {...register('emailContact')}
                           type="email"
                           defaultValue={email}
                           className="text-input"/>
                </div>
                <div className="field-wrap input-icon-prefix">
                    <span className="input-left-icon">
                        <BsTelephone size="20" color="#D4D4D4"/>
                    </span>
                    <input {...register('phoneContact')}
                           type="text"
                           defaultValue={phoneNumber}
                           className="text-input"/>
                </div>
                <FieldGroupInfo title="Social network"
                                label="Indicate the desired communication method"/>
                <div className="field-wrap social-links">
                    {fields.map((item, index) => (
                        <div key={item.id} className="social-link-item">
                            <Controller name={`socialLinks.${index}.networkName`}
                                        control={control}
                                        render={({field}) => (
                                            <CustomSelect options={socialNetworkOptions}
                                                          className="social-link-dropdown"
                                                          isSearchable={false}
                                                          onChange={field.onChange}/>
                                        )}/>
                            <div className="social-link-inner">
                                <input {...register(`socialLinks.${index}.profileName`)}
                                       type="text"
                                       placeholder="@profile"
                                       className="text-input"/>
                                <button onClick={() => remove(index)} className="remove-soc-link">
                                    <CiCircleRemove size="24" color="#D4D4D4"/>
                                </button>
                            </div>
                        </div>
                    ))}
                    <button type="button"
                            className="add-social-link"
                            onClick={() => {
                                append({profileName: ''})
                            }}><AiOutlinePlus size="20"/> Add More
                    </button>
                </div>
            </FieldGroup>
            <Button className="btn outline-btn"
                    value="Go Next"
                    icon={<AiOutlineArrowRight size="14" color="#242731"/>}
                    onClick={() => handleNextStep(nextFormStep)}/>
        </>
    );
};
