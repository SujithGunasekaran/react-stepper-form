import { FaAngleDown } from "react-icons/fa6";

const InputMultiSelect = (props) => {

    // props
    const {
        fieldData,
        formValue,
        formErrors,
        handleInputChange
    } = props;

    return (
        <div className='input-multi-select'>
            <div className='multi-select-wrapper'>
                <div className='input-multi-select-item-wrapper'>
                    <div className='item'>item</div>
                </div>
                <div className='input-multi-select-icon'>
                    <FaAngleDown className='icon' />
                </div>
            </div>
            <div className='multi-select-option-wrapper'>
                <div>Hello</div>
            </div>
        </div>
    )

}

export default InputMultiSelect;
