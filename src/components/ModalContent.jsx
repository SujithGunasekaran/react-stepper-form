/* eslint-disable react/prop-types */
import Forms from "./Forms";

const ModalContent = (props) => {

    // props
    const { formData, formValues, handleInputChange } = props;

    return (
        <>
            <h2 className='title'>{formData.title}</h2>
            <p className='description'>{formData.description}</p>
            <div className='modal-content-form-field-container'>
                {
                    formData.fields.map((formField) => (
                        <div key={formField.id} className={formField.style}>
                            <Forms
                                type={formField.type}
                                formValue={formValues?.[formField.name] ?? null}
                                fieldData={formField}
                                handleInputChange={handleInputChange}
                            />
                        </div>
                    ))
                }
            </div>
        </>
    )

}

export default ModalContent;
