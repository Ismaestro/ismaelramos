import { AppPage } from './app.po';

describe('ismaelramos App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Browser side rendering with Firebase 🔥');
  });
});
