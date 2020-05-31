export default interface IFilm {
    popularity: number,
    vote_count: number,
    video: boolean,
    poster_path: string,
    id: number,
    adult: boolean,
    backdrop_path: string,
    original_language: string,
    original_title: string,
    genre_ids: [],
    title: string,
    vote_average: number,
    overview: string,
    release_date: string,
    runtime:number,
    tagline:string,
    genres:any[],
    personalNote?:any
}

