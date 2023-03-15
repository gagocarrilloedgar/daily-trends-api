import { FeedCreator } from '../../../../src/context/Feed/application';
import { Feed, FeedId, FeedRepository, Source } from '../../../../src/context/Feed/domain';

describe('FeedCreator', () => {
  const repository: FeedRepository = {
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    delete: jest.fn(),
    update: jest.fn()
  };

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

    expect(repository.save).toHaveBeenCalledWith(expectedCourse);
  });
});
