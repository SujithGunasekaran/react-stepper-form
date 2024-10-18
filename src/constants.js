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

const formDataThree = {
    title: 'Skill Level',
    description: 'Please tell us about your skill level in frontend developer',
    fields: [
        {
            id: '1',
            component: 'radio',
            type: 'radio',
            label: 'Select skills level',
            hideLabel: true,
            name: 'skillLevel',
            style: 'full-width',
            validationType: 'empty',
            options: [
                {
                    id: 'biginner',
                    name: 'biginner',
                    displayName: 'Biginner'
                },
                {
                    id: 'intermediate',
                    name: 'intermediate',
                    displayName: 'Intermediate'
                },
                {
                    id: 'advanced',
                    name: 'advanced',
                    displayName: 'Advanced'
                },
                {
                    id: 'expect',
                    name: 'expect',
                    displayName: 'Expect'
                },
            ],
            errorMessages: {
                empty: 'Please Select Skill Level',
            }
        },
    ]
}

const formDataTwo = {
    title: 'Skills',
    description: 'Select relevant skills that align with your current or previous experience.',
    fields: [
        {
            id: '1',
            component: 'multiSelect',
            type: 'multiSelect',
            label: 'Select skills level',
            hideLabel: true,
            name: 'skills',
            style: 'full-width',
            validationType: 'emptyArray',
            options: [
                {
                    id: 'javascript',
                    name: 'javascript',
                    displayName: 'Javascript'
                },
                {
                    id: 'react.js',
                    name: 'react.js',
                    displayName: 'React.js'
                },
                {
                    id: 'next.js',
                    name: 'next.js',
                    displayName: 'Next.js'
                },
                {
                    id: 'typescript',
                    name: 'typescript',
                    displayName: 'Typescript'
                },
                {
                    id: 'vue.js',
                    name: 'vue.js',
                    displayName: 'Vue.js'
                },
            ],
            errorMessages: {
                empty: 'Please Select Skills',
            }
        },
    ]
}

const formFour = {
    title: 'Review',
    description: 'Review your details before submitting the details.',
    fields: [
        ...formDataOne.fields,
        ...formDataTwo.fields,
        ...formDataThree.fields,
    ]
}


const steps = [
    {
        id: 1,
        formData: formDataOne,
    },
    {
        id: 2,
        formData: formDataTwo,
    },
    {
        id: 3,
        formData: formDataThree,
    },
    {
        id: 4,
        formData: formFour,
    },
];

export default steps;
