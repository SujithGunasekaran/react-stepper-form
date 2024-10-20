import { FaCheck } from "react-icons/fa";

const Result = () => {

    return (
        <div className='result-container'>
            <div className='result-check-mark'>
                <FaCheck className='icon' />
            </div>
            <h2 className='result-title'>Congratulations 🎉</h2>
            <p className='result-description'>Your profile has been created and you are now ready to start participating in the challenges that matches your interest and coading experience level</p>
        </div>
    )

}

export default Result;
