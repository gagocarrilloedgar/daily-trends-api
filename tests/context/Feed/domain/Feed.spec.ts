import { Feed, Source } from '../../../../src/context/Feed/domain';
import { Uuid } from '../../../../src/context/Shared/domain/value-object/Uuid';

describe('Feed', () => {
  it('should be able to create a new feed', () => {
    const feed = new Feed(
      new Uuid('0766c602-d4d4-48b6-9d50-d3253123275e'),
      'Feed title',
      'Feed description',
      'https://example.com',
      'https://example.com/image.png',
      Source.ELMUNDO,
      new Date()
    );
    expect(feed).toBeDefined();
  });
});
