const formDataOne = {
    title: 'Personal Information',
    description: 'Please provide your personal details so we can get to know you better',
    fields: [
        {
            id: '1',
            type: 'text',
            label: 'First Name',
            name: 'firstName',
            placeholder: 'First Name',
            style: 'half-width'
        },
        {
            id: '2',
            type: 'text',
            label: 'Last Name',
            name: 'lastName',
            placeholder: 'Last Name',
            style: 'half-width'
        },
        {
            id: '3',
            type: 'email',
            label: 'Email Address',
            name: 'emailAddress',
            placeholder: 'abc@gmail.com',
            style: 'half-width'
        },
        {
            id: '4',
            type: 'mobile',
            label: 'Mobile Number',
            name: 'mobileName',
            placeholder: '9876598765',
            style: 'half-width'
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
        formData: []
    },
    {
        id: 3,
        formData: []
    },
    {
        id: 4,
        formData: []
    },
];

export default steps;
