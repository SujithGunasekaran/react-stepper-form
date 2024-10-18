/* eslint-disable react/prop-types */
import formFields from "./formFields";

const Forms = (props) => {

    // props
    const {
        fieldData,
        formValue,
        formErrors,
        disable,
        handleInputChange
    } = props;

    const FormComponent = formFields[fieldData.component];

    return (
        <FormComponent
            disable={disable}
            formValue={formValue}
            formErrors={formErrors}
            fieldData={fieldData}
            handleInputChange={handleInputChange}
        />
    )

}

export default Forms;
