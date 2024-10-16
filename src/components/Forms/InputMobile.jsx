/* eslint-disable react/prop-types */
import useForm from "../hooks/useForm";

const InputMobile = (props) => {

    // props
    const {
        fieldData,
        formValue,
        formErrors,
        handleInputChange
    } = props;

    const { inputValue, handleFieldChange } = useForm(formValue || '');

    const updateFormData = () => {
        handleInputChange(fieldData.name, inputValue);
    }

    const errorMessage = fieldData.errorMessages[formErrors[fieldData.name]] || '';

    return (
        <div className='modal-content-input-wrapper'>
            <label
                htmlFor={fieldData.name}
                className='input-label'
            >
                {fieldData.label}
            </label>
            <div className={`input-field-mobile-wrapper ${errorMessage && 'error'}`}>
                <div className='number-text'>+91 - </div>
                <input
                    id={fieldData.name}
                    type={fieldData.type}
                    name={fieldData.name}
                    value={inputValue}
                    maxLength={10}
                    placeholder={fieldData.placeholder}
                    className='input-field mobile'
                    onChange={handleFieldChange}
                    onBlur={updateFormData}
                />
            </div>
            {
                errorMessage &&
                <div className='input-field-error-message'>
                    {errorMessage}
                </div>
            }
        </div>
    )

}

export default InputMobile;
