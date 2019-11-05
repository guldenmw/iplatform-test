
export interface IMusicBrainzReleasesResult {
    created:  string;
    count:    number;
    offset:   number;
    releases: IMusicBrainzRelease[];
}

interface IMusicBrainzRelease {
    id:                    string;
    score:                 string;
    count:                 number;
    title:                 string;
    status:                string;
    packaging:             string;
    "text-representation": ITextRepresentation;
    "artist-credit":       IArtistCredit[];
    "release-group":       IReleaseGroup;
    date:                  string;
    country:               string;
    "release-events":      IReleaseEvent[];
    barcode:               string;
    "label-info":          ILabelInfo[];
    "track-count":         number;
    media:                 IMedia[];
}

interface IArtistCredit {
    artist: IArtist;
}

interface IArtist {
    id:                  string;
    name:                string;
    "sort-name":         string;
    aliases?:            IAlias[];
    "iso-3166-1-codes"?: string[];
}

interface IAlias {
    "sort-name":  string;
    name:         string;
    locale:       null;
    type:         null | string;
    primary:      null;
    "begin-date": null;
    "end-date":   null;
}

interface ILabelInfo {
    "catalog-number": string;
    label:            ILabel;
}

interface ILabel {
    id:   string;
    name: string;
}

interface IMedia {
    format:        string;
    "disc-count":  number;
    "track-count": number;
}

interface IReleaseEvent {
    date: string;
    area: IArtist;
}

interface IReleaseGroup {
    id:             string;
    "primary-type": string;
}

interface ITextRepresentation {
    language: string;
    script:   string;
}

export default IMusicBrainzRelease