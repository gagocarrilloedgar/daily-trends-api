import { FeedFinder } from '../../../../src/context/Feed/application';
import { Feed } from '../../../../src/context/Feed/domain';
import { FeedRepositoryMock } from '../__mocks__/FeedRepositoryMock';

describe('FindAllFeed', () => {
  let repository: FeedRepositoryMock;
  let finder: FeedFinder;

  beforeEach(() => {
    repository = new FeedRepositoryMock();
    finder = new FeedFinder(repository);
  });

  it('If not empty should return all feeds', async () => {
    const feeds = await finder.run();
    const expected: Array<Feed> = [];

    repository.assertFind();
    expect(feeds).toEqual(expected);
  });
});
