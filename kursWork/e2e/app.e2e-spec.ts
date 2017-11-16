import { KursWorkPage } from './app.po';

describe('kurs-work App', () => {
  let page: KursWorkPage;

  beforeEach(() => {
    page = new KursWorkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
