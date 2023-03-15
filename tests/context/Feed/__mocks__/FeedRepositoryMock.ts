import { Feed, FeedRepository } from '../../../../src/context/Feed/domain';

export class FeedRepositoryMock implements FeedRepository {
  private saveMock: jest.Mock;
  private findMock: jest.Mock;
  private findOneMock: jest.Mock;
  private deleteMock: jest.Mock;
  private updateMock: jest.Mock;

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

  async find(id: string): Promise<Feed[] | undefined> {
    return this.findMock(id);
  }

  async findOne(query: unknown): Promise<Feed | undefined> {
    return this.findOneMock(query);
  }

  async delete(id: string): Promise<void> {
    return this.deleteMock(id);
  }

  async update(feed: Feed): Promise<void> {
    return this.updateMock(feed);
  }

  assertSaveHasBeenCalledWith(expected: Feed): void {
    expect(this.saveMock).toHaveBeenCalledWith(expected);
  }
}
