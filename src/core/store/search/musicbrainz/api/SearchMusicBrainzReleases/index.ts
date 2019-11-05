import IMusicBrainzRelease, { IMusicBrainzReleasesResult } from "../../types/MusicBrainzReleasesResults";

const fetchMusicBrainsReleases = async (artistId: string): Promise<IMusicBrainzRelease[]> => {
  const url = `http://musicbrainz.org/ws/2/release/?query=arid:${artistId}&fmt=json`;
  console.log(url);
  const response = await fetch(url);
  const json: IMusicBrainzReleasesResult = await response.json();
  console.log(json);
  const { releases } = json;

  return releases;
};

export default fetchMusicBrainsReleases;

