import ILastFMArtist from '../../types/LastFMArtistsResults';

const createFakeMbid = (artist: ILastFMArtist): string => {
  const { name = '', url = '' } = artist;
  return `${name.toLowerCase().replace(/ /g, '')}${url.toLowerCase()}`;
};

export default createFakeMbid;
