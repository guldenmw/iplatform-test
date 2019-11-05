import IArtistResult, { ILastFMArtistResults } from '../../types';

const fetchLastfmArtists = async (title): Promise<IArtistResult[]> => {
  const url = `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${title}&api_key=92088617afae9bf475f0df7179d0c311&format=json`;
  const response = await fetch(url);
  const json: ILastFMArtistResults = await response.json();
  const {
    results: {
      artistmatches: {
        artist,
      }
    }
  } = json;
  return artist;
};

export default fetchLastfmArtists;
