import ILastFMArtist, { ILastFMArtistResults } from '../../types/LastFMArtistsResults';
import { apiKey } from '../../../../../../secrets';
import createFakeMbid from '../../helpers/create-fake-mbid';

const fetchLastfmArtists = async (title): Promise<ILastFMArtist[]> => {
  const url = `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${title}&api_key=${apiKey}&format=json`;
  const response = await fetch(url);
  const json: ILastFMArtistResults = await response.json();
  const {
    results: {
      artistmatches: {
        artist,
      }
    }
  } = json;

  return artist.map(singleArtist => ({
    ...singleArtist,
    mbid: singleArtist.mbid || createFakeMbid(singleArtist)
  }));
};

export default fetchLastfmArtists;
