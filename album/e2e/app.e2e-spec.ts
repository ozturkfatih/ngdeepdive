import { AlbumPage } from './app.po';

describe('album App', () => {
  let page: AlbumPage;

  beforeEach(() => {
    page = new AlbumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
