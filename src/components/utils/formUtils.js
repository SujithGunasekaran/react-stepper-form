
const isEmpty = (value) => {
    return !value;
}

const validateValueWithRegex = (input, regex) => {
    if (isEmpty(input)) {
        return 'empty';
    }
    return !regex.test(input) ? 'inValid' : null;
}

export const validateForm = (formFields, inputData) => {
    return formFields.reduce((errors, field) => {
        if (!inputData[field.name]) {
            return {
                ...errors,
                [field.name]: 'empty'
            };
        }
        switch (field.validationType) {
            case 'empty':
                if (isEmpty(inputData[field.name])) {
                    return {
                        ...errors,
                        [field.name]: 'empty',
                    }
                }
                return errors;
            case 'regex': {
                const validationMessage = validateValueWithRegex(inputData[field.name], field.regex);
                return {
                    ...errors,
                    ...(validationMessage ? { [field.name]: validationMessage } : {})
                }
            }
            default:
                return errors;
        }
    }, {})
}
