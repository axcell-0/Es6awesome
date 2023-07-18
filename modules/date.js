import { DateTime } from './luxon.js';

export default class DateDisplay {
  constructor() {
    this.dateDisplay = document.querySelector('.currentDate');
    this.initializeDateDisplay();
  }

  initializeDateDisplay() {
    const currentDate = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
    this.dateDisplay.innerHTML = currentDate;
  }
}
