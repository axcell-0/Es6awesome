import Library from './library.js';

export default class Form {
  constructor() {
    this.addBookForm = document.getElementById('addBookForm');
    this.titleInput = document.getElementById('titleInput');
    this.authorInput = document.getElementById('authorInput');

    this.addBookForm.addEventListener('submit', this.handleFormSubmit.bind(this));
  }

  handleFormSubmit(event) {
    event.preventDefault();

    const library = new Library();
    library.addBook(this.titleInput.value, this.authorInput.value);

    this.titleInput.value = '';
    this.authorInput.value = '';
  }
}
