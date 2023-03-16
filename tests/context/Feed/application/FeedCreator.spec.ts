import { FeedCreator } from '../../../../src/context/Feed/application';
import { Feed } from '../../../../src/context/Feed/domain';
import { SourceTypes } from '../../../../src/context/Shared/domain/Feed/Source';
import { Uuid } from '../../../../src/context/Shared/domain/value-object/Uuid';
import { FeedRepositoryMock } from '../__mocks__/FeedRepositoryMock';

describe('FeedCreator', () => {
  let repository: FeedRepositoryMock;
  let creator: FeedCreator;

  beforeEach(() => {
    repository = new FeedRepositoryMock();
    creator = new FeedCreator(repository);
  });

  it('should be able to create a new feed', async () => {
    const id = '0766c602-d4d4-48b6-9d50-d3253123275e';
    const title = 'Feed title';
    const description = 'Feed description';
    const url = 'https://example.com';
    const image = 'https://example.com/image.png';
    const source = SourceTypes.ELMUNDO;
    const authorName = 'John Doe';
    const location = 'Madrid';
    const date = new Date();

    await creator.run(id, title, url, description, image, source, authorName, location, date);
    const expectedCourse = new Feed(new Uuid(id), title, url, description, image, source, authorName, location, date);

    repository.assertSaveHasBeenCalledWith(expectedCourse);
  });
});
