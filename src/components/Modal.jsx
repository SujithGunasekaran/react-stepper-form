/* eslint-disable react/prop-types */
import { useState } from 'react';
import { validateForm } from './utils/formUtils';
import stepsList from '../constants';
import ModalHeader from "./ModalHeader";
import ModalFooter from './ModalFooter';
import ModalContent from './ModalContent';

const Modal = () => {

    // state
    const [activeStepIndex, setActiveStepIndex] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);
    const [formValues, setFormValues] = useState({});
    const [formErrors, setFormErrors] = useState({});

    const clearFormFieldError = (fieldName) => {
        if (formErrors[fieldName]) {
            setFormErrors((prevState) => {
                let clone = { ...prevState };
                delete clone[fieldName];
                return clone;
            })
        }
    }

    const handleInputChange = (fieldName, value) => {
        setFormValues((prevState) => {
            return {
                ...prevState,
                [fieldName]: value
            }
        });
        if (value) {
            clearFormFieldError(fieldName);
        }
    }

    const goToPreviousStep = () => {
        setActiveStepIndex((prevState) => {
            return prevState > 0 ? prevState - 1 : prevState;
        });
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const errors = validateForm(stepsList[activeStepIndex].formData.fields, formValues);
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }
        setActiveStepIndex((prevState) => {
            return prevState === stepsList.length - 1 ? prevState : prevState + 1;
        });
    }

    return (
        <div className='modal-container'>
            <ModalHeader
                steps={stepsList}
                activeIndex={activeStepIndex}
                isCompleted={isCompleted}
            />
            <form onSubmit={handleFormSubmit}>
                <div className='modal-content'>
                    <ModalContent
                        totalSteps={stepsList.length - 1}
                        formData={stepsList[activeStepIndex].formData}
                        formValues={formValues}
                        formErrors={formErrors}
                        activeStepIndex={activeStepIndex}
                        handleInputChange={handleInputChange}
                    />
                </div>
                <div className='modal-footer'>
                    <ModalFooter
                        goToPreviousStep={goToPreviousStep}
                    />
                </div>
            </form>
        </div>
    )
}

export default Modal;
