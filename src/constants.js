const formDataOne = {
    title: 'Personal Information',
    description: 'Please provide your personal details so we can get to know you better',
    fields: [
        {
            id: '1',
            component: 'text',
            type: 'text',
            label: 'First Name',
            name: 'firstName',
            placeholder: 'First Name',
            style: 'half-width',
            validationType: 'empty',
            errorMessages: {
                empty: 'Please Enter First Name',
            }
        },
        {
            id: '2',
            component: 'text',
            type: 'text',
            label: 'Last Name',
            name: 'lastName',
            placeholder: 'Last Name',
            style: 'half-width',
            validationType: 'empty',
            errorMessages: {
                empty: 'Please Enter Last Name',
            }
        },
        {
            id: '3',
            component: 'text',
            type: 'text',
            label: 'Email Address',
            name: 'emailAddress',
            placeholder: 'abc@gmail.com',
            style: 'half-width',
            validationType: 'regex',
            regex: new RegExp(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/),
            errorMessages: {
                empty: 'Please Enter Email Address',
                inValid: 'Please Enter Valid Email Address',
            }
        },
        {
            id: '4',
            component: 'mobile',
            type: 'tel',
            label: 'Mobile Number',
            name: 'mobileName',
            placeholder: '9876598765',
            style: 'half-width',
            regex: new RegExp(/^\d{10}$/),
            validationType: 'regex',
            errorMessages: {
                empty: 'Please Enter Mobile Number',
                inValid: 'Please Enter Valid Mobile Number'
            }
        }
    ]
};

const steps = [
    {
        id: 1,
        formData: formDataOne
    },
    {
        id: 2,
        formData: formDataOne
    },
    {
        id: 3,
        formData: formDataOne
    },
    {
        id: 4,
        formData: formDataOne
    },
];

export default steps;
