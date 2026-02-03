import { useParams } from 'react-router-dom';
import axios from '../../api/client';
import { useEffect, useState } from 'react';
import type IMovie from '../../interfaces/movie';
import '../../components/MovieModal/MovieModal.css';

export default function DetailPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<IMovie | null>(null);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`/movie/${movieId}`);
      console.log('movie request:', request);
      setMovie(request.data);
    }

    fetchData();
  }, [movieId]);

  if (!movie) return <div>영화 정보가 없습니다.</div>;

  return (
    <section>
      <img
        className="modal__poster-img"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="poster"
      />
    </section>
  );
}
