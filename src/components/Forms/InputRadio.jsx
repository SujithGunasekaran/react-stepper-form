/* eslint-disable react/prop-types */

const InputRadio = (props) => {

    // props
    const {
        fieldData,
        formValue,
        formErrors,
        handleInputChange
    } = props;

    const errorMessage = fieldData.errorMessages[formErrors[fieldData.name]] || '';

    return (
        <div className='input-select-wrapper'>
            {
                fieldData.options.map((option) => (
                    <div
                        key={option.id}
                        className={`input-select-option ${errorMessage && 'error'}`}
                        onClick={() => handleInputChange(fieldData.name, option.name)}
                    >
                        <input
                            type='radio'
                            id={option.name}
                            name={fieldData.name}
                            value={option.name}
                            checked={formValue === option.name}
                        />
                        <label
                            htmlFor={option.name}
                            className='input-radio-label'
                        >
                            {option.displayName}
                        </label>
                    </div>
                ))
            }
            {
                errorMessage &&
                <div className='input-field-error-message'>
                    {errorMessage}
                </div>
            }
        </div>
    )

}

export default InputRadio;
