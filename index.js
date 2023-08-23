const fs = require('fs');
const inquirer = require('inquirer');

const {
  Circle,
  Triangle,
  Square
} = require('./lib/shapes');

const options = {
  shape: '',
  shapeColor: '',
  text: '',
  textColor: '',
};

function writeLogoFile() {
  let shape;

  switch (options.shape) {
    case 'Circle':
      shape = new Circle(options.shapeColor);
      break;
    case 'Triangle':
      shape = new Triangle(options.shapeColor);
      break;
    case 'Square':
      shape = new Square(options.shapeColor);
      break;
  }

  let svg = `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <g>
      ${shape.render()}
      <text x="150" y="130" text-anchor="middle" font-size="40" fill="${options.textColor}">${options.text}</text>
    </g>
  </svg>
`;

  fs.writeFile(`./dist/logo.svg`, svg, 'utf-8', (error) => {
    if (error) {
      console.log(error);
      process.exit(1);
    }

    console.log('Generated logo.svg')
  });
}

function askUserForText() {
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter three letters for the logo text: ',
    }
  ])
  .then((answers) => {
    options.text = answers.text;
    askUserForTextColor();
  })
  .catch((error) => {
    console.log(error);
  });
}

function askUserForTextColor() {
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color for the logo text: ',
    }
  ])
  .then((answers) => {
    options.textColor = answers.textColor;
    askUserForShape();
  })
  .catch((error) => {
    console.log(error);
  });
}

function askUserForShape() {
  inquirer
  .prompt([
    {
      type: 'list',
      name: 'shape',
      message: 'Pick a shape for the logo: ',
      choices: [
        'Circle',
        'Triangle',
        'Square',
      ],
    }
  ])
  .then((answers) => {
    options.shape = answers.shape;
    askUserForShapeColor();
  })
  .catch((error) => {
    console.log(error);
  });
}

function askUserForShapeColor() {
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color for the logo shape: ',
    }
  ])
  .then((answers) => {
    options.shapeColor = answers.shapeColor;
    writeLogoFile();
  })
  .catch((error) => {
    console.log(error);
  });
}

askUserForText();