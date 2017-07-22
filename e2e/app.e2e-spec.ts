import { Ng4AnimationPage } from './app.po';

describe('ng4-animation App', () => {
  let page: Ng4AnimationPage;

  beforeEach(() => {
    page = new Ng4AnimationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
