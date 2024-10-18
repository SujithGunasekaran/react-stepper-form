/* eslint-disable react/prop-types */
import { useCallback } from 'react';
import { useMemo, useState, useEffect } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";

const InputMultiSelect = (props) => {

    // props
    const {
        fieldData,
        formValue = [],
        formErrors,
        disable,
        handleInputChange
    } = props;

    // state
    const [isDropdownOpened, setIsDropdownOpened] = useState(false);

    const optionMap = useMemo(() => {
        return fieldData.options.reduce((initialObj, option) => {
            return {
                ...initialObj,
                [option.name]: {
                    name: option.name,
                    displayName: option.displayName
                }
            }
        }, {})
    }, [fieldData.options]);

    const errorMessage = fieldData.errorMessages[formErrors[fieldData.name]] || '';

    const toggleDropdown = (event) => {
        event.stopPropagation();
        setIsDropdownOpened((prevState) => !prevState);
    }

    const closeDropdown = useCallback(() => {
        if (isDropdownOpened) {
            setIsDropdownOpened(false);
        }
    }, [isDropdownOpened])

    const addOption = (event, selectedOption) => {
        event.stopPropagation();
        handleInputChange(fieldData.name, [...formValue, selectedOption]);
    }

    const removeOption = (selectedOption) => {
        const modifiedValue = formValue.filter((value) => value !== selectedOption);
        handleInputChange(fieldData.name, modifiedValue);
    }

    useEffect(() => {
        document.addEventListener('click', closeDropdown);

        return () => document.addEventListener('click', closeDropdown);
    }, [closeDropdown])

    return (
        <>
            <div
                className={`input-multi-select ${errorMessage && 'error'} ${isDropdownOpened && 'active'}`}
            >
                <div className='multi-select-wrapper'>
                    <div className='input-multi-select-item-wrapper'>
                        {
                            formValue &&
                            formValue.map((value) => (
                                <div className='item' key={value}>
                                    <div>{optionMap[value].displayName}</div>
                                    <div className='icon' onClick={() => removeOption(optionMap[value].name)}>
                                        <MdOutlineClose className='icon' />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {
                        !disable &&
                        <div className='input-multi-select-icon' onClick={toggleDropdown}>
                            <FaAngleDown className='icon' />
                        </div>
                    }
                </div>
                {
                    isDropdownOpened &&
                    <div className='multi-select-option-wrapper'>
                        {
                            fieldData.options.map((option) => (
                                <div
                                    className='item'
                                    key={option.name}
                                    data-optioname={option.name}
                                    onClick={(event) => addOption(event, option.name)}
                                >
                                    {option.displayName}
                                </div>

                            ))
                        }
                    </div>
                }
            </div>
            {
                errorMessage &&
                <div className='input-field-error-message multi-select'>
                    {errorMessage}
                </div>
            }
        </>

    )

}

export default InputMultiSelect;
