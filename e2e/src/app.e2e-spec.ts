import {
  browser,
  by,
  element,
  ElementArrayFinder,
  ExpectedConditions,
} from 'protractor';
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
    const reservationsTabBtn = browser.findElement(
      by.id('tab-button-reservations')
    );
    reservationsTabBtn.click();
    const reservationsBtn = browser.findElement(
      by.xpath(
        "//app-explore-container[@name='Reservations']/child::div[@id='container']/ion-button"
      )
    );
    reservationsBtn.click();
    browser.wait(ExpectedConditions.urlContains('/reservations/details'), 20);
    expect(element(by.id('reservations-list')).getText()).toContain(
      'Reservations List'
    );
  });

  it('Reservations List page should have a sample list', () => {
    page.navigateTo('/');
    const reservationsTabBtn = browser.findElement(
      by.id('tab-button-reservations')
    );
    reservationsTabBtn.click();
    const reservationsBtn = browser.findElement(
      by.xpath(
        "//app-explore-container[@name='Reservations']/child::div[@id='container']/ion-button"
      )
    );
    reservationsBtn.click();
    browser.wait(ExpectedConditions.urlContains('/reservations/details'), 20);
    let sampleList = element.all(by.tagName('ion-item'));
    expect(sampleList.count()).toBeGreaterThanOrEqual(3);
    expect(sampleList.get(0).getText()).toContain('2020-03-02T00:00:02.000Z');
    expect(sampleList.get(1).getText()).toContain('2020-01-02T00:00:02.000Z');
    expect(sampleList.get(2).getText()).toContain('2020-03-01T00:00:02.000Z');
  });

  it('Reservations List page should have a back button and navigate back to Reservations page', () => {
    const backBtn = browser.findElement(by.tagName('ion-back-button'));
    expect(backBtn.isDisplayed()).toBeTruthy();
    browser.wait(
      ExpectedConditions.elementToBeClickable(
        element(by.tagName('ion-back-button'))
      )
    );
    backBtn.click();
    expect(page.getPageTitle()).not.toContain('List');
    expect(page.getPageUrl()).toContain('/tabs/reservations');
  });

  it('should open a new page Clients List', () => {
    page.navigateTo('/');
    const clientsTabBtn = browser.findElement(by.id('tab-button-clients'));
    clientsTabBtn.click();
    const clientsBtn = browser.findElement(
      by.xpath(
        "//app-explore-container[@name='Clients']/child::div[@id='container']/ion-button"
      )
    );
    clientsBtn.click();
    browser.wait(ExpectedConditions.urlContains('/clients/details'), 20);
    expect(element(by.id('clients-list')).getText()).toContain('Clients List');
  });

  it('Clients List page should have a sample list', () => {
    page.navigateTo('/');
    const clientsTabBtn = browser.findElement(by.id('tab-button-clients'));
    clientsTabBtn.click();
    const clientsBtn = browser.findElement(
      by.xpath(
        "//app-explore-container[@name='Clients']/child::div[@id='container']/ion-button"
      )
    );
    clientsBtn.click();
    browser.wait(ExpectedConditions.urlContains('/clients/details'), 20);
    let sampleList = element.all(by.tagName('ion-item'));
    expect(sampleList.count()).toBeGreaterThanOrEqual(3);
    expect(sampleList.get(0).getText()).toContain('Leanne');
    expect(sampleList.get(1).getText()).toContain('Ervin');
    expect(sampleList.get(2).getText()).toContain('Clementine');
  });

  it('Clients List page should have a back button and navigate back to Clients page', () => {
    page.navigateTo('/');
    const clientsTabBtn = browser.findElement(by.id('tab-button-clients'));
    clientsTabBtn.click();
    const clientsBtn = browser.findElement(
      by.xpath(
        "//app-explore-container[@name='Clients']/child::div[@id='container']/ion-button"
      )
    );
    clientsBtn.click();
    browser.wait(ExpectedConditions.urlContains('/clients/details'), 20);
    const backBtn = browser.findElement(by.tagName('ion-back-button'));
    expect(backBtn.isDisplayed()).toBeTruthy();
    browser.wait(
      ExpectedConditions.elementToBeClickable(
        element(by.tagName('ion-back-button'))
      )
    );
    backBtn.click();
    expect(page.getPageTitle()).not.toContain('List');
    expect(page.getPageUrl()).toContain('/tabs/clients');
    expect(clientsBtn.isDisplayed()).toBeTruthy();
  });

  it('should open a new page Products List', () => {
    page.navigateTo('/');
    const productsTabBtn = browser.findElement(by.id('tab-button-products'));
    productsTabBtn.click();
    const productsBtn = browser.findElement(
      by.xpath(
        "//app-explore-container[@name='Products']/child::div[@id='container']/ion-button"
      )
    );
    productsBtn.click();
    browser.wait(ExpectedConditions.urlContains('/products/details'), 20);
    expect(element(by.id('products-list')).getText()).toContain(
      'Products List'
    );
  });

  it('Products List page should have a sample list', () => {
    page.navigateTo('/');
    const productsTabBtn = browser.findElement(by.id('tab-button-products'));
    productsTabBtn.click();
    const productsBtn = browser.findElement(
      by.xpath(
        "//app-explore-container[@name='Products']/child::div[@id='container']/ion-button"
      )
    );
    productsBtn.click();
    browser.wait(ExpectedConditions.urlContains('/products/details'), 20);
    let sampleList = element.all(by.tagName('ion-card-header'));
    expect(sampleList.count()).toBeGreaterThanOrEqual(3);
    expect(sampleList.get(0).getText()).toContain('Moisture');
    expect(sampleList.get(1).getText()).toContain('T-Shirts');
    expect(sampleList.get(2).getText()).toContain('Jacket');
  });

  it('Products List page should have a back button and navigate back to Products page', () => {
    page.navigateTo('/');
    const productsTabBtn = browser.findElement(by.id('tab-button-products'));
    productsTabBtn.click();
    const productsBtn = browser.findElement(
      by.xpath(
        "//app-explore-container[@name='Products']/child::div[@id='container']/ion-button"
      )
    );
    productsBtn.click();
    browser.wait(ExpectedConditions.urlContains('/products/details'), 20);
    const backBtn = browser.findElement(by.tagName('ion-back-button'));
    expect(backBtn.isDisplayed()).toBeTruthy();
    browser.wait(
      ExpectedConditions.elementToBeClickable(
        element(by.tagName('ion-back-button'))
      )
    );
    backBtn.click();
    expect(page.getPageTitle()).not.toContain('List');
    expect(page.getPageUrl()).toContain('/tabs/products');
    expect(productsBtn.isDisplayed()).toBeTruthy();
  });
});
