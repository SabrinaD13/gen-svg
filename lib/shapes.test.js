const { Circle, Square, Triangle } = require('./shapes');

describe('Circle', () => {
  it('renders correctly', () => {
    const shape = new Circle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<circle cx="150" cy="115" r="80" fill="blue"/>')
  });
});

describe('Square', () => {
  it('renders correctly', () => {
    const shape = new Square();
    shape.setColor('green');
    expect(shape.render()).toEqual('<rect x="90" y="60" width="120" height="120" fill="green"/>')
  });
});

describe('Triangle', () => {
  it('renders correctly', () => {
    const shape = new Triangle();
    shape.setColor('pink');
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="pink"/>')
  });
});
