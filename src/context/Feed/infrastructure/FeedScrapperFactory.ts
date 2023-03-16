import { SourceTypes } from '../../Shared/domain/Feed/Source';
import { FeedScrapperRepository } from '../domain/FeedScrapperRepository';
import { ElMundoFeedScrapperRepository } from './ElMundoFeedScrapperRepository';

import { ElPaisFeedScrapperRepository } from './ElPaisFeedScrapperRepository';

export class FeedScrapperFactory {
  public static create(type: SourceTypes): FeedScrapperRepository {
    switch (type) {
      case SourceTypes.ELPAIS:
        return new ElPaisFeedScrapperRepository();
      case SourceTypes.ELMUNDO:
        return new ElMundoFeedScrapperRepository();
      default:
        throw new Error('FeedScrapperRepository not found');
    }
  }
}
