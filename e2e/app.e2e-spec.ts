import { PartTwoPage } from './app.po';

describe('part-two App', () => {
  let page: PartTwoPage;

  beforeEach(() => {
    page = new PartTwoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
