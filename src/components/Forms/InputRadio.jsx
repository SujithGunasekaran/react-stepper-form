/* eslint-disable react/prop-types */

const InputRadio = (props) => {

    // props
    const {
        fieldData,
        formValue,
        formErrors,
        disable,
        handleInputChange
    } = props;

    const errorMessage = fieldData.errorMessages[formErrors[fieldData.name]] || '';

    const handleRadioSelect = (selectedOption) => {
        if (disable) return;
        handleInputChange(fieldData.name, selectedOption);
    }

    return (
        <div className='input-select-wrapper'>
            {
                fieldData.options.map((option) => (
                    <div
                        key={option.id}
                        className={`input-select-option ${errorMessage && 'error'} ${disable && 'disabled'}`}
                        onClick={() => handleRadioSelect(option.name)}
                    >
                        <input
                            type='radio'
                            id={option.name}
                            name={fieldData.name}
                            value={option.name}
                            disabled={disable}
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
