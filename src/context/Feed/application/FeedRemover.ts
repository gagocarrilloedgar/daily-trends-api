import { FeedId } from '../../Shared/domain/Feed/FeedId';
import { FeedRepository } from '../domain';

export class FeedRemover {
  constructor(private repository: FeedRepository, private id: string) {
    this.repository = repository;
    this.id = id;
  }

  async run(): Promise<void> {
    const feedId = new FeedId(this.id);

    await this.repository.delete(feedId);
  }
}
