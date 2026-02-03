export default interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  name: string;
  overview: string;
  release_date: string;
  first_air_date: string;
  vote_average: number;
  original_name: string;
  media_type: string;
  videos?: {
    results: IVideo[];
  };
}

export interface IVideo {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
}
