export interface ILastFMArtistResults {
  results: IArtistSearchResults;
}

interface IArtistSearchResults {
  'opensearch:Query': OpensearchQuery;
  'opensearch:totalResults': string;
  'opensearch:startIndex': string;
  'opensearch:itemsPerPage': string;
  artistmatches: {
    artist: IArtistResult[];
  };
  '@attr': Attr;
}

interface Attr {
  for: string;
}

interface IArtistResult {
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

export default IArtistResult;
