export interface IArtist {
    id: string;
    name: string;
    popularity: number;
    type: string;
    uri: string;
    href: string;
    external_urls: {
        spotify: string;
    };
    images: {
        height: number;
        url: string;
        width: number;
    }[];   
    genres: string[];
}
