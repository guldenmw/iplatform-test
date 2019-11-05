import IMusicBrainzArtist, { IMusicBrainzArtistsResult } from "../../types/MusicBrainzArtistsResults";

const fetchMusicBrainsArtists = async (title): Promise<IMusicBrainzArtist[]> => {
  const url = `http://musicbrainz.org/ws/2/artist/?query=artist:${title}&fmt=json`;
  const response = await fetch(url);
  const json: IMusicBrainzArtistsResult = await response.json();
  const { artists } = json;

  return artists;
};

export default fetchMusicBrainsArtists;

