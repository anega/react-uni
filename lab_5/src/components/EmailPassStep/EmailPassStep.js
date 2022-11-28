import React, {useState} from 'react';
import StepIndicator from '../StepIndicator';
import StepInfo from '../StepInfo';
import FieldGroup from '../FieldGroup';
import Button from '../Button';
import InfoFieldGroup from '../InfoFieldGroup';
import {useFormContext} from 'react-hook-form';
import {AiFillEye, AiFillEyeInvisible, AiOutlineCheck} from 'react-icons/ai';
import './EmailPassStep.css';
import FormFieldError from '../FormFieldError';

const formIndicatorStep = 3;
const nextFormStep = 4;

export const EmailPassStep = ({handleNextStep}) => {
    const {register, getValues, formState: {errors, isDirty, isValid}} = useFormContext();
    const phoneNumber = getValues(['phoneRegister.countryCode', 'phoneRegister.phone']).join(' ');
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    }

    return (
        <>
            <StepIndicator formStep={formIndicatorStep}/>
            <StepInfo
                title="Registration"
                description="Fill in the registration data. It will take a couple of minutes. All you need is a phone number and e-mail"/>
            <InfoFieldGroup mainText={phoneNumber}
                            label="Number confirmed"
                            labelIcon={<AiOutlineCheck/>}/>
            <FieldGroup>
                <div className="field-wrap">
                    <p className="input-label">Enter your email</p>
                    <input {...register('emailRegister', {
                        required: 'Email cannot be empty.',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                        }
                    })} type="email" className="text-input"/>
                    {errors.emailRegister && <FormFieldError errorMessage={errors.emailRegister.message}/>}
                </div>
                <div className="field-wrap">
                    <p className="input-label">Set a password</p>
                    <div className="password-wrap">
                        <input {...register('password', {
                            required: 'Password cannot be empty.',
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters long.'
                            },
                            pattern: {
                                value: /(?=.*?[0-9])(?=.*?[A-Za-z]).+/,
                                message: 'Password must include at least one letter and one number.'
                            }
                        })}
                               type={showPassword ? 'text' : 'password'}
                               className="text-input"/>
                        {showPassword ?
                            <AiFillEyeInvisible size="24" color="#D4D4D4" onClick={handleShowPassword}/> :
                            <AiFillEye size="24" color="#D4D4D4" onClick={handleShowPassword}/>}
                    </div>
                    {errors.password && <FormFieldError errorMessage={errors.password.message}/>}
                </div>
            </FieldGroup>
            <Button className="btn filled-btn"
                    value="Register Now"
                    onClick={() => {
                        if (isValid && isDirty) handleNextStep(nextFormStep);
                    }}/>
        </>
    );
};
