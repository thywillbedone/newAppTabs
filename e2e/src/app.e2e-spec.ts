import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should navigate to Reservations', () => {
    page.navigateTo();
    expect(page.getPageTitle()).toContain('Reservations');
  });

  it('should navigate to Reservations url', () => {
    page.navigateTo();
    expect(page.getPageUrl()).toContain('/tabs/reservations');
  });
});
