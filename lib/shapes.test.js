const {Circle, Square, Triangle} = require("./shapes")

// Circle Shape
describe('Circle', () => {
    Test('renders correctly',  () => {
        const shape= new Circle();
        var color =('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual('')
    });
});
// Square Shape
describe('Square', () => {
    Test('renders correctly',  () => {
        const shape= new Square();
        var color =('green')
        shape.setColor(color);
        expect(shape.render()).toEqual('')
    });
});
// Triange Shape
describe('Triangle', () => {
    Test('renders correctly',  () => {
        const shape= new Triangle();
        var color =('pink')
        shape.setColor(color);
        expect(shape.render()).toEqual('')
    });
});