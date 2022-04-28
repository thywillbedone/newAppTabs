import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(url: string) {
    return browser.get(url);
  }

  getPageTitle() {
    return element(by.css('ion-title')).getText();
  }

}
