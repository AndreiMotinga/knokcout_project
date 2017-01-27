import ko from 'knockout';
import homeTemplate from 'text!./home.html';

class HomeVM {
    constructor(route) {
        this.message = ko.observable('Initial message');
    }

    doSomething() {
        const inital = "Initial message";
        const updated = "You've clicked me";
        const current = this.message();
        (current == inital) ? this.message(updated) : this.message(inital);
    }
}

export default { viewModel: HomeVM, template: homeTemplate };
