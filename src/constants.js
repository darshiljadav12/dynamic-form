export const formObj = {
  form: {
    title: 'Personal Information Form',
    description: 'Please fill out your personal details below.',
    groups: [
      {
        title: 'Contact Information',
        fields: [
          {
            label: 'Full Name',
            type: 'text',
            name: 'fullName',
            placeholder: 'Enter your full name',
            required: true,
          },
          {
            label: 'Address',
            type: 'textarea',
            name: 'address',
            placeholder: 'Enter your address',
            required: true,
          },
          {
            label: 'State',
            type: 'dropdown',
            name: 'state',
            options: [
              'Alabama',
              'Alaska',
              'Arizona',
              'Arkansas',
              'California',
              'New York',
              'Texas',
              'Washington',
              'Wisconsin',
              'Wyoming',
            ],
            required: true,
          },
          {
            label: 'Phone Number',
            type: 'text',
            name: 'phoneNumber',
            placeholder: 'Enter your phone number',
            required: true,
          },
          {
            label: 'Preferred Contact Method',
            type: 'radio',
            name: 'contactMethod',
            options: [
              { label: 'Email', value: 'email' },
              { label: 'Phone', value: 'phone' },
              { label: 'SMS', value: 'sms' },
            ],
            required: true,
          },
        ],
      },
      {
        title: 'Schooling Information',
        fields: [
          {
            label: 'Highest Qualification',
            type: 'dropdown',
            name: 'qualification',
            options: [
              'High School',
              'Associate Degree',
              "Bachelor's Degree",
              "Master's Degree",
              'Doctorate',
            ],
            required: true,
          },
          {
            label: 'Graduation Year',
            type: 'number',
            name: 'graduationYear',
            placeholder: 'Enter graduation year',
            min: 1950,
            max: 2024,
            required: true,
          },
          {
            label: 'Subjects Studied',
            type: 'checkbox',
            name: 'subjects',
            options: [
              { label: 'Mathematics', value: 'math' },
              { label: 'Physics', value: 'physics' },
              { label: 'Chemistry', value: 'chemistry' },
              { label: 'Biology', value: 'biology' },
              { label: 'Computer Science', value: 'cs' },
            ],
          },
          {
            label: 'Grade Point Average (GPA)',
            type: 'slider',
            name: 'gpa',
            min: 0.0,
            max: 8.0,
            step: 0.1,
          },
        ],
      },
      {
        title: 'Employment Details',
        fields: [
          {
            label: 'Current Job Title',
            type: 'text',
            name: 'jobTitle',
            placeholder: 'Enter your current job title',
            required: false,
          },
          {
            label: 'Employment Status',
            type: 'radio',
            name: 'employmentStatus',
            options: [
              { label: 'Employed', value: 'employed' },
              { label: 'Unemployed', value: 'unemployed' },
              { label: 'Student', value: 'student' },
              { label: 'Retired', value: 'retired' },
            ],
          },
          {
            label: 'Skills',
            type: 'checkbox',
            name: 'skills',
            options: [
              { label: 'Programming', value: 'programming' },
              { label: 'Project Management', value: 'projectManagement' },
              { label: 'Design', value: 'design' },
              { label: 'Data Analysis', value: 'dataAnalysis' },
              { label: 'Communication', value: 'communication' },
            ],
          },
        ],
      },
      {
        title: 'Hobbies and Interests',
        fields: [
          {
            label: 'Favorite Hobby',
            type: 'text',
            name: 'favoriteHobby',
            placeholder: 'Enter your favorite hobby',
          },
          {
            label: 'Level of Interest in Technology',
            type: 'slider',
            name: 'techInterest',
            min: 1,
            max: 10,
            step: 1,
          },
          {
            label: 'Do you participate in any sports?',
            type: 'radio',
            name: 'sportsParticipation',
            options: [
              { label: 'Yes', value: 'yes' },
              { label: 'No', value: 'no' },
            ],
          },
        ],
      },
    ],
  },
};
