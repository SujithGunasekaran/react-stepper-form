/* eslint-disable react/prop-types */
import formFields from "./formFields";

const Forms = (props) => {

    // props
    const {
        fieldData,
        formValue,
        formErrors,
        handleInputChange
    } = props;

    const FormComponent = formFields[fieldData.component];

    return (
        <FormComponent
            formValue={formValue}
            formErrors={formErrors}
            fieldData={fieldData}
            handleInputChange={handleInputChange}
        />
    )

}

export default Forms;
