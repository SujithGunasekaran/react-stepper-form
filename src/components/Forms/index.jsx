/* eslint-disable react/prop-types */
import formFields from "./formFields";

const Forms = (props) => {

    // props
    const {
        type,
        fieldData,
        formValue,
        handleInputChange
    } = props;

    const FormComponent = formFields[type];

    return (
        <FormComponent
            formValue={formValue}
            fieldData={fieldData}
            handleInputChange={handleInputChange}
        />
    )

}

export default Forms;
