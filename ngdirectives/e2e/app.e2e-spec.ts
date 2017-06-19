import { NgdirectivesPage } from './app.po';

describe('ngdirectives App', () => {
  let page: NgdirectivesPage;

  beforeEach(() => {
    page = new NgdirectivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
