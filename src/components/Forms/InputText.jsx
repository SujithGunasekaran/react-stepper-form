/* eslint-disable react/prop-types */
import useForm from "../hooks/useForm";

const InputText = (props) => {

    // props
    const {
        fieldData,
        formValue,
        formErrors,
        disable,
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
            <input
                id={fieldData.name}
                type={fieldData.type}
                name={fieldData.name}
                value={inputValue}
                placeholder={fieldData.placeholder}
                disabled={disable}
                className={`input-field ${errorMessage && 'error'}`}
                onChange={handleFieldChange}
                onBlur={updateFormData}
            />
            {
                errorMessage &&
                <div className='input-field-error-message'>
                    {errorMessage}
                </div>
            }
        </div>
    )

}

export default InputText;
