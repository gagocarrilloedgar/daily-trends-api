export enum Source {
  ELMUNDO = 'elmundo.com',
  ELPAIS = 'elpais.com'
}

export class Feed {
  public id: string;
  public title: string;
  public url: string;
  public description: string;
  public image: string;
  public source: Source;

  constructor(
    id: string,
    title: string,
    url: string,
    description: string,
    link: string,
    image: string,
    source: Source
  ) {
    this.id = id;
    this.title = title;
    this.url = url;
    this.description = description;
    this.image = image;
    this.source = source;
  }
}
