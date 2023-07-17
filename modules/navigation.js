export default class Navigation {
  constructor() {
    this.navLinks = document.getElementsByTagName('a');
    this.sections = document.getElementsByTagName('section');

    this.initializeNavLinks();
  }

  initializeNavLinks() {
    this.sections[0].style.display = 'none';

    for (let i = 0; i < this.navLinks.length; i += 1) {
      this.navLinks[i].addEventListener('click', () => {
        for (let j = 0; j < this.sections.length; j += 1) {
          if (i === j) {
            this.sections[j].style.display = 'block';
          } else {
            this.sections[j].style.display = 'none';
          }
        }
      });
    }
  }
}
