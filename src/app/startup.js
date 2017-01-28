import 'jquery';
import 'bootstrap';
import ko from 'knockout';
import 'knockout-projections'
import * as router from './router';

// Components can be packaged as AMD modules, such as the following:
ko.components.register('nav-bar', { require: 'components/nav-bar/nav-bar' });
ko.components.register('home-page', { require: 'components/home-page/home' });

// ... or for template-only components, you can just point to a .html file directly:
ko.components.register('about-page', {
    template: { require: 'text!components/about-page/about.html' }
});

ko.components.register('name-editor', {
  template: "<p>Enter your name: <input data-bind='value: name'></p>" +
    "<span data-bind='text: name'></span> ",
  viewModel: function () {
    this.name = ko.observable('something');
  }
});

ko.components.register('program-grid', { require: 'components/program-grid/program-grid' });

// [Scaffolded component registrations will be inserted here. To retain this feature, don't remove this comment.]

// Start the application
ko.applyBindings({ route: router.currentRoute });
