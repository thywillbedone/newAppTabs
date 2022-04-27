import { browser, by, element, ExpectedConditions } from 'protractor';
import { AppPage } from './app.po';

describe('e2e Tests', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should navigate to Reservations when the app starts', () => {
    page.navigateTo('/');
    expect(page.getPageTitle()).toContain('Reservations');
    expect(page.getPageUrl()).toContain('/tabs/reservations');
  });

  it('should open a new page Reservations List', () => {
    page.navigateTo('/');
    const reservationsTabBtn = element(by.id('tab-button-reservations'));
    const reservationsBtn = element(
      by.xpath(
        "//app-explore-container[@name='Reservations']/child::div/ion-button"
      )
    );
    reservationsTabBtn.click();
    browser.wait(ExpectedConditions.elementToBeClickable(reservationsBtn));
    reservationsBtn.click();
    browser.wait(ExpectedConditions.urlContains('/reservations/details'), 10);
    expect(element(by.id('reservations-list')).getText()).toContain(
      'Reservations List'
    );
  });

  it('should open a new page Clients List', () => {
    page.navigateTo('/');
    const clientsTabBtn = element(by.id('tab-button-clients'));
    const clientsBtn = element(
      by.xpath("//app-explore-container[@name='Clients']/child::div/ion-button")
    );
    clientsTabBtn.click();
    browser.wait(ExpectedConditions.elementToBeClickable(clientsBtn));
    clientsBtn.click();
    browser.wait(ExpectedConditions.urlContains('/clients/details'), 10);
    expect(element(by.id('clients-list')).getText()).toContain('Clients List');
  });

  it('should open a new page Products List', () => {
    page.navigateTo('/');
    const productsTabBtn = element(by.id('tab-button-products'));
    const productsBtn = element(
      by.xpath(
        "//app-explore-container[@name='Products']/child::div/ion-button"
      )
    );
    productsTabBtn.click();
    browser.wait(ExpectedConditions.elementToBeClickable(productsBtn));
    productsBtn.click();
    browser.wait(ExpectedConditions.urlContains('/products/details'), 10);
    expect(element(by.id('products-list')).getText()).toContain(
      'Products List'
    );
  });
});
