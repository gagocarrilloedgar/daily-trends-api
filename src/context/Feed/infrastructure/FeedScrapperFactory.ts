import { SourceTypes } from '../../Shared/domain/Feed/Source';
import { FeedScrapperRepository } from '../domain/FeedScrapperRepository';
import { ElMundoFeedScrapperRepository } from './ElMundoFeedScrapperRepository';

export class FeedScrapperFactory {
  public static create(type: SourceTypes): FeedScrapperRepository {
    switch (type) {
      case SourceTypes.ELMUNDO:
        return new ElMundoFeedScrapperRepository();
      case SourceTypes.ELPAIS:
        throw new Error('FeedScrapperRepository not implemented for ELPAIS');
      default:
        throw new Error('FeedScrapperRepository not found');
    }
  }
}
