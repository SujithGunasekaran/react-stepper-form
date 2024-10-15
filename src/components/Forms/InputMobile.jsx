/* eslint-disable react/prop-types */
import useForm from "../hooks/useForm";

const InputMobile = (props) => {

    // props
    const {
        fieldData,
        formValue,
        handleInputChange
    } = props;

    const { inputValue, handleFieldChange } = useForm(formValue || '');

    const updateFormData = () => {
        handleInputChange(fieldData.name, inputValue);
    }

    return (
        <div className='modal-content-input-wrapper'>
            <label
                htmlFor={fieldData.name}
                className='input-label'
            >
                {fieldData.label}
            </label>
            <div className='input-field-mobile-wrapper'>
                <div className='number-text'>+91 - </div>
                <input
                    id={fieldData.name}
                    type={fieldData.type}
                    name={fieldData.name}
                    value={inputValue}
                    placeholder={fieldData.placeholder}
                    className='input-field mobile'
                    onChange={handleFieldChange}
                    onBlur={updateFormData}
                />
            </div>

        </div>
    )

}

export default InputMobile;
