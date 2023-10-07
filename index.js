const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type:'input',
            message: 'What text would you like on your logo?',
            name: 'svgName',

        },
        {
            type:'input',
            message: 'What color would you like the text to be?',
            name: 'textColor',
        },
        {
            type: 'rawlist',
            message: 'What shape would you like your logo to be?',
            name: 'shape',
            choices: [
                'circle',
                'triangle',
                'square',
            ]
        },
        {
            type: 'input',
            message: 'What color would you like the shape to be? Colorname or hexadecimal value accepted',
            name: 'shapeColor',
        },
        {
            type: 'confirm',
            message: 'Generating your new SVG Logo!',
        }
    ])