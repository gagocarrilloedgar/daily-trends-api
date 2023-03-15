import { FeedId } from '../../Shared/domain/Feed/FeedId';
import { FeedRepository } from '../domain';

export class FeedRemover {
  constructor(private repository: FeedRepository) {
    this.repository = repository;
  }

  async run(id: string): Promise<void> {
    const feedId = new FeedId(id);

    await this.repository.delete(feedId);
  }
}
