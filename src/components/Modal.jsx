/* eslint-disable react/prop-types */
import { useState } from 'react';
import stepsList from '../constants';
import ModalHeader from "./ModalHeader";


const Modal = () => {

    // state
    const [steps, setSteps] = useState(stepsList);
    const [activeStepIndex, setActiveStepIndex] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);

    return (
        <div className='modal-container'>
            <ModalHeader
                steps={steps}
                activeIndex={activeStepIndex}
                isCompleted={isCompleted}
            />
        </div>
    )
}

export default Modal;
