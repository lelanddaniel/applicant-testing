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
//Show an alert message saying "Fail!" if the value is NOT 30. \n\
\n\
\n\
\n\
\n'
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