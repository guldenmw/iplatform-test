import ILastFMArtist from "./search/lastfm/types/LastFMArtistsResults";
import IMusicBrainzRelease from "./search/musicbrainz/types/MusicBrainzReleasesResults";
import {IFavoritesArtist} from "./favorites/types";

export const originalRelease: IMusicBrainzRelease = {
  id: '6b7f5bc5-bd40-4b55-ac85-df18ab29fcef',
  score: '100',
  count: 1,
  title: 'Half Breed / Dark Lady',
  status: 'Official',
  'text-representation': {
    language: 'eng',
    script: 'Latn'
  },
  'artist-credit': [
    {
      name: 'Cher',
      artist: {
        id: 'bfcc6d75-a6a5-4bc6-8282-47aec8531818',
        name: 'Cher',
        'sort-name': 'Cher'
      }
    }
  ],
  'release-group': {
    id: 'bcd81295-40f8-4866-b6e7-6c3f929ec5b5',
    'type-id': 'dd2a21e1-0c00-3729-a7a0-de60b84eb5d1',
    title: 'Half Breed / Dark Lady',
    'primary-type': 'Album',
    'secondary-types': [
      'Compilation'
    ]
  },
  date: '1993',
  country: 'DE',
  'release-events': [
    {
      date: '1993',
      area: {
        id: '85752fda-13c4-31a3-bee5-0e5cb1f51dad',
        name: 'Germany',
        'sort-name': 'Germany',
        'iso-3166-1-codes': [
          'DE'
        ]
      }
    }
  ],
  barcode: '008813094520',
  'label-info': [
    {
      'catalog-number': 'MCD 30945',
      label: {
        id: '46a3941a-c810-47a1-974f-955effec4d09',
        name: 'MCA Records'
      }
    }
  ],
  'track-count': 21,
  packaging: 'ec27701a-4a22-37f4-bfac-6616e0f9750a',
  media: [
    {
      format: 'CD',
      'disc-count': 1,
      'track-count': 21
    }
  ]
};

export const originalArtist: IFavoritesArtist = {
  name: 'Cher',
  mbid: 'bfcc6d75-a6a5-4bc6-8282-47aec8531818'
};

export const originalArtistComplete: ILastFMArtist = {
  name: 'Cher',
  listeners: '1143717',
  mbid: 'bfcc6d75-a6a5-4bc6-8282-47aec8531818',
  url: 'https://www.last.fm/music/Cher',
  streamable: '0',
  image: [
    {
      '#text': 'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png',
      size: 'small'
    },
    {
      '#text': 'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
      size: 'medium'
    },
    {
      '#text': 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
      size: 'large'
    },
    {
      '#text': 'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
      size: 'extralarge'
    },
    {
      '#text': 'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
      size: 'mega'
    }
  ]
};

export const newRelease: IMusicBrainzRelease = {
  id: '060ce6ed-10ba-4a19-9696-92fd9e69e07e',
  score: '100',
  count: 2,
  title: 'The Very Best of Cher',
  status: 'Official',
  packaging: 'ec27701a-4a22-37f4-bfac-6616e0f9750a',
  'text-representation': {
    language: 'eng',
    script: 'Latn'
  },
  'artist-credit': [
    {
      name: 'Cher',
      artist: {
        id: 'bfcc6d75-a6a5-4bc6-8282-47aec8531818',
        name: 'Cher',
        'sort-name': 'Cher'
      }
    }
  ],
  'release-group': {
    id: 'dff08c4e-5d1a-3f65-9432-731a5a997a07',
    'type-id': 'dd2a21e1-0c00-3729-a7a0-de60b84eb5d1',
    title: 'The Very Best of Cher',
    'primary-type': 'Album',
    'secondary-types': [
      'Compilation'
    ]
  },
  date: '2003',
  country: 'AU',
  'release-events': [
    {
      date: '2003',
      area: {
        id: '106e0bec-b638-3b37-b731-f53d507dc00e',
        name: 'Australia',
        'sort-name': 'Australia',
        'iso-3166-1-codes': [
          'AU'
        ]
      }
    }
  ],
  barcode: '9325583021343',
  'label-info': [
    {
      'catalog-number': '2564608465',
      label: {
        id: 'c595c289-47ce-4fba-b999-b87503e8cb71',
        name: 'Warner Bros. Records'
      }
    }
  ],
  'track-count': 42,
  media: [
    {
      format: 'CD',
      'disc-count': 1,
      'track-count': 19
    },
    {
      format: 'CD',
      'disc-count': 1,
      'track-count': 23
    }
  ]
};

export const newArtist: ILastFMArtist = {
  name: 'Cher Lloyd',
  listeners: '512860',
  mbid: '48fbfb0b-92ee-45eb-99c2-0bde4c05962e',
  url: 'https://www.last.fm/music/Cher+Lloyd',
  streamable: '0',
  image: [
    {
      '#text': 'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png',
      size: 'small'
    },
    {
      '#text': 'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
      size: 'medium'
    },
    {
      '#text': 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
      size: 'large'
    },
    {
      '#text': 'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
      size: 'extralarge'
    },
    {
      '#text': 'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
      size: 'mega'
    }
  ]
}