import Model from "./Model";

class Controller {

    model: Model;

    constructor() {
        this.model = new Model();
    };

    getIncrement() {
        return this.model.increment();
    }

    getDecrement() {
        return this.model.decrement();
    }

    getMultiply() {
        return this.model.multiply();
    }
};

export default Controller;