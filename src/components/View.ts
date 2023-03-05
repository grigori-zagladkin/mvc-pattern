import Controller from "./Controller";

class View {

    root: HTMLElement;
    controller: Controller;
    title: HTMLElement;
    incrementButton: HTMLElement;
    decrementButton: HTMLElement;
    multiplyButton: HTMLElement;

    constructor() {

        this.root = document.body;
        this.controller = new Controller();
        this.title = document.createElement('h1');
        this.title.innerText = 'Value: 0';
        this.incrementButton = document.createElement('button');
        this.incrementButton.innerText = 'increment';
        this.decrementButton = document.createElement('button');
        this.decrementButton.innerText = 'decrement';
        this.multiplyButton = document.createElement('button');
        this.multiplyButton.innerText = 'multiply 2';
    
    }

    render() {
        this.root.append(this.title);
        this.root.append(this.incrementButton);
        this.root.append(this.decrementButton);
        this.root.append(this.multiplyButton);
    }

};

export default View;