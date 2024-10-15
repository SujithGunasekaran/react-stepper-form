import { useState } from 'react';

const useForm = (initialValue) => {

    // state
    const [inputValue, setInputValue] = useState(initialValue);

    const handleFieldChange = (event) => {
        const { value } = event.target;
        setInputValue(value);
    }

    return {
        inputValue,
        handleFieldChange
    };

}

export default useForm;
