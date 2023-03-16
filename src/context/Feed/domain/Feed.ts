import { AggregateRoot } from '../../Shared/domain/AggregateRoot';
import { FeedId } from '../../Shared/domain/Feed/FeedId';
import { Source, SourceTypes } from '../../Shared/domain/Feed/Source';

export class Feed extends AggregateRoot {
  public id: FeedId;
  public title: string;
  public url: string;
  public description: string;
  public image: string;
  public source: Source;
  public author: string;
  public location: string;
  public date: Date;

  constructor(
    id: FeedId,
    title: string,
    url: string,
    description: string,
    image: string,
    source: keyof typeof SourceTypes,
    author: string,
    location: string,
    date: Date
  ) {
    super();
    this.id = id;
    this.title = title;
    this.url = url;
    this.description = description;
    this.image = image;
    this.source = Source.fromString(source);
    this.author = author;
    this.location = location;
    this.date = date;
  }

  static fromPrimitives(primitives: {
    id: string;
    title: string;
    url: string;
    description: string;
    image: string;
    source: string;
    author: string;
    location: string;
    date: Date;
  }): Feed {
    return new Feed(
      new FeedId(primitives.id),
      primitives.title,
      primitives.url,
      primitives.description,
      primitives.image,
      primitives.source as keyof typeof SourceTypes,
      primitives.author,
      primitives.location,
      primitives.date
    );
  }

  toPrimitives(): any {
    return {
      id: this.id.value,
      title: this.title,
      url: this.url,
      description: this.description,
      image: this.image,
      source: this.source.value,
      date: this.date
    };
  }
}
