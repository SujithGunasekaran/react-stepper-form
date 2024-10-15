/* eslint-disable react/prop-types */
import { useState } from 'react';
import stepsList from '../constants';
import ModalHeader from "./ModalHeader";
import ModalFooter from './ModalFooter';
import ModalContent from './ModalContent';

const Modal = () => {

    // state
    const [steps, setSteps] = useState(stepsList);
    const [activeStepIndex, setActiveStepIndex] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);
    const [formValues, setFormValues] = useState({});

    const handleInputChange = (fieldName, value) => {
        setFormValues((prevState) => {
            return {
                ...prevState,
                [fieldName]: value
            }
        });
    }

    return (
        <div className='modal-container'>
            <ModalHeader
                steps={steps}
                activeIndex={activeStepIndex}
                isCompleted={isCompleted}
            />
            <form>
                <div className='modal-content'>
                    <ModalContent
                        formData={steps[activeStepIndex].formData}
                        formValues={formValues}
                        handleInputChange={handleInputChange}
                    />
                </div>
                <div className='modal-footer'>
                    <ModalFooter />
                </div>
            </form>
        </div>
    )
}

export default Modal;
