
export interface IMusicBrainzArtistsResult {
    created: string;
    count:   number;
    offset:  number;
    artists: IMusicBrainzArtist[];
}

interface IMusicBrainzArtist {
    id:             string;
    type:           string;
    score:          string;
    name:           string;
    "sort-name":    string;
    country:        string;
    area:           Area;
    "begin-area":   Area;
    disambiguation: string;
    "life-span":    LifeSpan;
}

interface Area {
    id:          string;
    name:        string;
    "sort-name": string;
}

interface LifeSpan {
    begin: string;
    end:   string;
    ended: boolean;
}

export default IMusicBrainzArtist;
