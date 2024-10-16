/* eslint-disable react/prop-types */


const ModalFooter = ({ goToPreviousStep }) => {

    return (
        <div className='modal-footer-button-wrapper'>
            <button type='button' className='back-btn' onClick={goToPreviousStep}>Go Back</button>
            <button type='submit' className='submit-btn'>Next Step</button>
        </div>
    )

}

export default ModalFooter;
