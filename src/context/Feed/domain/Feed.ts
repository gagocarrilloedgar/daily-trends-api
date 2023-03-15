import { FeedId } from '../../Shared/domain/Feed/FeedId';

export enum Source {
  ELMUNDO = 'elmundo.com',
  ELPAIS = 'elpais.com'
}

export class Feed {
  public id: FeedId;
  public title: string;
  public url: string;
  public description: string;
  public image: string;
  public source: Source;
  public date: Date;

  constructor(id: FeedId, title: string, url: string, description: string, image: string, source: Source, date: Date) {
    this.id = id;
    this.title = title;
    this.url = url;
    this.description = description;
    this.image = image;
    this.source = source;
    this.date = date;
  }
}
