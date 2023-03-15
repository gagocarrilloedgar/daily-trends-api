import { Feed, FeedRepository } from '../../../../src/context/Feed/domain';
import { FeedId } from '../../../../src/context/Shared/domain/Feed/FeedId';

export class FeedRepositoryMock implements FeedRepository {
  private saveMock: jest.Mock;
  private findMock: jest.Mock;
  private findOneMock: jest.Mock;
  private deleteMock: jest.Mock;
  private updateMock: jest.Mock;

  private feeds: Array<Feed> = [];

  constructor() {
    this.saveMock = jest.fn();
    this.findMock = jest.fn();
    this.findOneMock = jest.fn();
    this.deleteMock = jest.fn();
    this.updateMock = jest.fn();
  }

  async save(feed: Feed): Promise<void> {
    return this.saveMock(feed);
  }

  async find(): Promise<Array<Feed>> {
    this.findMock();
    return this.feeds;
  }

  async findOne(query: unknown): Promise<Feed> {
    return this.findOneMock(query);
  }

  async delete(id: FeedId): Promise<void> {
    return this.deleteMock(id);
  }

  async update(feed: Feed): Promise<void> {
    return this.updateMock(feed);
  }

  assertSaveHasBeenCalledWith(expected: Feed): void {
    expect(this.saveMock).toHaveBeenCalledWith(expected);
  }

  assertFind(): void {
    expect(this.findMock).toHaveBeenCalled();
  }
}
