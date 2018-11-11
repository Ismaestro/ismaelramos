import {browser, by, element} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getDownloadIcon() {
    return element(by.css('.btn-download'));
  }
}
