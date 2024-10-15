/* eslint-disable react/prop-types */
import useForm from "../hooks/useForm";

const InputText = (props) => {

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
            <input
                id={fieldData.name}
                type={fieldData.type}
                name={fieldData.name}
                value={inputValue}
                placeholder={fieldData.placeholder}
                className='input-field'
                onChange={handleFieldChange}
                onBlur={updateFormData}
            />
        </div>
    )

}

export default InputText;
