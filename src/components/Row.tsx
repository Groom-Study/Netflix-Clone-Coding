import { useEffect, useState } from 'react';
import client from '../api/client';
import './Row.css';
import MovieModal from './MovieModal';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import type IMovie from '../interfaces/movie';

type RowProps = {
  title: string;
  fetchUrl: string;
  id: string;
  isLargeRow?: boolean;
};

export default function Row({ title, fetchUrl, id, isLargeRow = false }: RowProps) {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [movieSelected, setMovieSelected] = useState<IMovie | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const request = await client.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie: IMovie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  };

  return (
    <section className="row">
      <h2>{title}</h2>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          1378: {
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
          998: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          625: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          0: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
      >
        <div id={id} className="row__posters">
          {movies.map((movie: IMovie) => (
            <SwiperSlide>
              <img
                key={movie.id}
                className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                src={`https://image.tmdb.org/t/p/original/${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                onClick={() => handleClick(movie)}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      {modalOpen && movieSelected && <MovieModal {...movieSelected} setModalOpen={setModalOpen} />}
    </section>
  );
}
