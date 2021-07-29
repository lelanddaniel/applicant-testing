const challenges = {};
challenges.challengelist = [
    {
        id: 1,
        title: 'Simple Variable',
        level: 1,
        language: 'javascript',
        code: '//Instructions: \n\
//Create a simple variable named "i" and assign it a value of 10. \n\
//Use a loop to increment the value of the variable by 2, 10 times. \n\
//Show an alert message saying "Success!" if the value is 30. \n\
//Show an alert message saying "Fail!" if the value is NOT 30. \n'
    },
    {
        id: 2,
        title: 'Simple Function',
        level: 1,
        language: 'javascript',
        code: '//Instructions: \n\
//Write a function that takes an integer minutes and converts it to seconds. \n\
// Dont forget to return the result.\n\
\n\
\n'
    },
    {
        id: 3,
        title: 'Simple Array',
        level: 1,
        language: 'javascript',
        code: '//Instructions: \n\
//Write a function that takes the array of numbers and adds them up.  \n\
// Dont forget to return the result.\n\
\n\
\n\
var numbers = [34,26,99,162,3];'
    },
    {
        id: 4,
        title: 'NAME',
        level: 2,
        language: 'javascript',
        code: '//Instructions: \n\
//... \n\
'
    },
    {
        id: 5,
        title: 'NAME',
        level: 2,
        language: 'javascript',
        code: '//Instructions: \n\
//... \n\
'
    },
    {
        id: 6,
        title: 'NAME',
        level: 2,
        language: 'javascript',
        code: '//Instructions: \n\
//... \n\
'
    },
    {
        id: 7,
        title: 'NAME',
        level: 3,
        language: 'javascript',
        code: '//Instructions: \n\
//... \n\
'
    },
    {
        id: 8,
        title: 'NAME',
        level: 3,
        language: 'javascript',
        code: '//Instructions: \n\
//... \n\
'
    },
    {
        id: 9,
        title: 'NAME',
        level: 3,
        language: 'javascript',
        code: '//Instructions: \n\
//... \n\
'
    },
    {
        id: 10,
        title: 'NAME',
        level: 4,
        language: 'javascript',
        code: '//Instructions: \n\
//... \n\
'
    },
    {
        id: 11,
        title: 'NAME',
        level: 4,
        language: 'javascript',
        code: '//Instructions: \n\
//... \n\
'
    },
    {
        id: 12,
        title: 'NAME',
        level: 4,
        language: 'javascript',
        code: '//Instructions: \n\
//... \n\
'
    },
];

challenges.getLevelName = (level) => {
    if (level === 1) return 'Noob';
    if (level === 2) return 'Hacker';
    if (level === 3) return 'Ninja';
    if (level === 4) return 'Guru';

    return 'Unknown';
};



export default challenges;