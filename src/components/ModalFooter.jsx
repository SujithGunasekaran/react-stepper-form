/* eslint-disable react/prop-types */


const ModalFooter = (props) => {

    // props
    const {
        isLast,
        activeStep,
        goToPreviousStep,
    } = props;

    return (
        <div className='modal-footer-button-wrapper'>
            {
                activeStep > 0 ?
                    <button type='button' className='back-btn' onClick={goToPreviousStep}>Go Back</button> :
                    <div></div>
            }
            <button type='submit' className='submit-btn'>
                {isLast ? 'Submit' : 'Next Step'}
            </button>
        </div>
    )

}

export default ModalFooter;
