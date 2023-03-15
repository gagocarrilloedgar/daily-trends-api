import { FeedCreator } from '../../../../src/context/Feed/application';
import { Feed, FeedId, Source } from '../../../../src/context/Feed/domain';
import { FeedRepositoryMock } from '../__mocks__/FeedRepositoryMock';

describe('FeedCreator', () => {
  let repository: FeedRepositoryMock;

  beforeEach(() => {
    repository = new FeedRepositoryMock();
  });

  it('should be able to create a new feed', async () => {
    const creator = new FeedCreator(repository);

    const id = 'feed-id' as FeedId;
    const title = 'Feed title';
    const description = 'Feed description';
    const url = 'https://example.com';
    const image = 'https://example.com/image.png';
    const source = Source.ELMUNDO;
    const date = new Date();

    await creator.run(id, title, url, description, image, source, date);
    const expectedCourse = new Feed(id, title, url, description, image, source, date);

    repository.assertSaveHasBeenCalledWith(expectedCourse);
  });
});
