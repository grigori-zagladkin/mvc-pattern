class Model {

    counter: number;

    constructor() {
        this.counter = 0;
    }
    
    increment() {
        return this.counter += 1;
    }

    decrement() {
        return this.counter -= 1;
    }

    multiply() {
        return this.counter += 2;
    }
};

export default Model;