import ko from 'knockout';
import templateMarkup from 'text!./program-grid.html';

class ProgramGrid {
  constructor(params) {
    this.channels = ko.observableArray();

    this.filteredChannels = this.channels.filter(function (c) {
      let shouldFilter = ko.unwrap(params && params.onlyMyChannels);
      return shouldFilter ? c.isSubscribed : true;
    });


    // $.getJSON('http://localhost:5660/api/listings', this.channels);
  }
}

export default { viewModel: ProgramGrid, template: templateMarkup };
