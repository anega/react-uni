import React, {useState} from 'react';
import StepIndicator from '../StepIndicator';
import StepInfo from '../StepInfo';
import FieldGroup from '../FieldGroup';
import Button from '../Button';
import InfoFieldGroup from '../InfoFieldGroup';
import {useFormContext} from 'react-hook-form';
import {AiFillEye, AiFillEyeInvisible, AiOutlineCheck} from 'react-icons/ai';
import './EmailPassStep.css';

const formIndicatorStep = 3;
const nextFormStep = 4;

export const EmailPassStep = ({handleNextStep}) => {
    const {register, getValues} = useFormContext();
    const phoneNumber = getValues(['countryCode', 'phoneNumber']).join(' ');
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
                    <input {...register} type="email" className="text-input"/>
                </div>
                <div className="field-wrap">
                    <p className="input-label">Set a password</p>
                    <div className="password-wrap">
                        <input {...register} type={showPassword ? 'text' : 'password'} className="text-input"/>
                        {showPassword ?
                            <AiFillEyeInvisible size="24" color="#D4D4D4" onClick={handleShowPassword}/> :
                            <AiFillEye size="24" color="#D4D4D4" onClick={handleShowPassword}/>}
                    </div>
                </div>
            </FieldGroup>
            <Button buttonType="button" className="btn filled-btn" value="Register Now"
                    onClick={() => handleNextStep(nextFormStep)}/>
        </>
    );
};
