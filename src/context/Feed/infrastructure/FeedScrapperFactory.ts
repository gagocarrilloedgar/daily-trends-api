import { SourceTypes } from '../../Shared/domain/Feed/Source';
import { FeedScrapperRepository } from '../domain/FeedScrapperRepository';

import { ElPaisFeedScrapperRepository } from './ElPaisFeedScrapperRepository';

export class FeedScrapperFactory {
  public static create(type: SourceTypes): FeedScrapperRepository {
    switch (type) {
      case SourceTypes.ELPAIS:
        return new ElPaisFeedScrapperRepository();
      case SourceTypes.ELMUNDO:
        throw new Error('FeedScrapperRepository not implemented for ELPAIS');
      default:
        throw new Error('FeedScrapperRepository not found');
    }
  }
}
