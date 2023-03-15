import { Feed, Source } from '../../../../src/context/Feed/domain';

describe('Feed', () => {
  it('should be able to create a new feed', () => {
    const feed = new Feed(
      'feed-id',
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
