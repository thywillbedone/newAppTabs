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
    expect(browser.getCurrentUrl()).toContain('/tabs/reservations');
  });

  /***********************Reservations**********************/

  it('should open a new page Reservations List', () => {
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
    browser.wait(ExpectedConditions.urlContains('/reservations/details'), 30);
    expect(element(by.id('reservations-list')).getText()).toContain(
      'Reservations List'
    );
  });

  it('Reservations List page should have a sample list', () => {
    browser.wait(ExpectedConditions.urlContains('/reservations/details'), 30);
    const sampleList = element.all(by.tagName('ion-item'));
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
    expect(browser.getCurrentUrl()).toContain('/tabs/reservations');
  });

  /***********************Clients**********************/

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
    browser.wait(ExpectedConditions.urlContains('/clients/details'), 30);
    expect(element(by.id('clients-list')).getText()).toContain('Clients List');
  });

  it('Clients List page should have a sample list', () => {
    browser.wait(ExpectedConditions.urlContains('/clients/details'), 30);
    const sampleList = element.all(by.tagName('ion-item'));
    expect(sampleList.count()).toBeGreaterThanOrEqual(3);
    expect(sampleList.get(0).getText()).toContain('Leanne');
    expect(sampleList.get(1).getText()).toContain('Ervin');
    expect(sampleList.get(2).getText()).toContain('Clementine');
  });

  it('Clients List page should have a back button and navigate back to Clients page', () => {
    const backBtn = browser.findElement(by.tagName('ion-back-button'));
    expect(backBtn.isDisplayed()).toBeTruthy();
    browser.wait(
      ExpectedConditions.elementToBeClickable(
        element(by.tagName('ion-back-button'))
      )
    );
    backBtn.click();
    expect(page.getPageTitle()).not.toContain('List');
    expect(browser.getCurrentUrl()).not.toContain('/details');
  });

  it('Clients List page should have additional feature Edit Client page', () => {
    const clientsBtn = element(
      by.xpath(
        "//app-explore-container[@name='Clients']/child::div[@id='container']/ion-button"
      )
    );
    browser.wait(ExpectedConditions.elementToBeClickable(clientsBtn));
    clientsBtn.click();
    browser.wait(ExpectedConditions.urlContains('/clients/details'), 30);
    const editBtns = element.all(by.xpath("//ion-button[text()='Edit']"));
    expect(editBtns.count()).toBeGreaterThanOrEqual(3);
    const editBtn2 = element(
      by.xpath(
        "//ion-button[@ng-reflect-router-link='/tabs/clients/details/,2']"
      )
    );
    //navigate to Edit Clients page
    editBtn2.click();
    browser.wait(ExpectedConditions.urlContains('/details/2'), 60);
    const backBtn = element(by.id('back-home'));
    const homeBtn = element(by.xpath("//ion-button[@routerlink='/']"));
    expect(backBtn.isDisplayed()).toBeTruthy();
    expect(homeBtn.isDisplayed()).toBeTruthy();
    //navigate back
    browser.wait(ExpectedConditions.elementToBeClickable(backBtn));
    backBtn.click();
    expect(page.getPageTitle()).not.toContain('Edit');
    expect(editBtns.isDisplayed()).toBeTruthy();
    editBtn2.click();
    browser.wait(ExpectedConditions.elementToBeClickable(homeBtn));
    expect(browser.getCurrentUrl()).toContain('/clients/details/2');
    //navigate home
    homeBtn.click();
    expect(page.getPageTitle()).toContain('Reservations');
    expect(browser.getCurrentUrl()).toContain('/tabs/reservations');
  });

  /***********************Products**********************/

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
    browser.wait(ExpectedConditions.urlContains('/products/details'), 30);
    expect(element(by.id('products-list')).getText()).toContain(
      'Products List'
    );
  });

  it('Products List page should have a sample list', () => {
    browser.wait(ExpectedConditions.urlContains('/products/details'), 30);
    const sampleList = element.all(by.tagName('ion-card-header'));
    expect(sampleList.count()).toBeGreaterThanOrEqual(3);
    expect(sampleList.get(0).getText()).toContain('Moisture');
    expect(sampleList.get(1).getText()).toContain('T-Shirts');
    expect(sampleList.get(2).getText()).toContain('Jacket');
  });

  it('Products List page should have a back button and navigate back to Products page', () => {
    const backBtn = browser.findElement(by.tagName('ion-back-button'));
    expect(backBtn.isDisplayed()).toBeTruthy();
    browser.wait(
      ExpectedConditions.elementToBeClickable(
        element(by.tagName('ion-back-button'))
      )
    );
    backBtn.click();
    expect(page.getPageTitle()).not.toContain('List');
    expect(browser.getCurrentUrl()).toContain('/tabs/products');
  });
});
