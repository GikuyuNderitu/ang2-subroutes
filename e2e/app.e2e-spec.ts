import { Ang2SubroutesPage } from './app.po';

describe('ang2-subroutes App', () => {
  let page: Ang2SubroutesPage;

  beforeEach(() => {
    page = new Ang2SubroutesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
