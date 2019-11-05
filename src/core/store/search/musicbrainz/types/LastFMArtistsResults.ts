export interface ILastFMArtistResults {
  results: ILastFMArtistSearchResults;
}

interface ILastFMArtistSearchResults {
  'opensearch:Query': OpensearchQuery;
  'opensearch:totalResults': string;
  'opensearch:startIndex': string;
  'opensearch:itemsPerPage': string;
  artistmatches: {
    artist: ILastFMArtist[];
  };
  '@attr': Attr;
}

interface Attr {
  for: string;
}

interface ILastFMArtist {
  name: string;
  listeners: string;
  mbid: string;
  url: string;
  streamable: string;
  image: Image[];
}

interface Image {
  '#text': string;
  size: string;
}

interface OpensearchQuery {
  '#text': string;
  role: string;
  searchTerms: string;
  startPage: string;
}

export default ILastFMArtist;
