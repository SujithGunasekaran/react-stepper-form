/* eslint-disable react/prop-types */


const ModalHeader = (props) => {

    // props
    const { steps, activeIndex, isCompleted } = props;

    return (
        <div className='modal-header-stepper-container'>
            {
                steps.map((step, index) => (
                    <div
                        key={step.id}
                        className={`${index < steps.length - 1 ? 'modal-header-stepper' : 'modal-header-stepper-last'} ${(activeIndex === index && !isCompleted) && 'active'} ${(index < activeIndex || isCompleted) && 'completed'}`}
                    >
                        <div className='modal-header-stepper-item'>
                            {(index < activeIndex || isCompleted) ? <span>&#10003;</span> : step.id}
                        </div>
                    </div>
                ))
            }
        </div>
    )

}

export default ModalHeader;
