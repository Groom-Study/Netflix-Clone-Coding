import axios from '../../api/client';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SearchPage.css';
import { useDebounce } from '../../hooks/useDebounce';
import type IMovie from '../../interfaces/movie';

export default function SearchPage() {
  const navigate = useNavigate();

  const [searchResults, setSearchResults] = useState([]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const query = useQuery();
  const searchTerm = query.get('q');
  const debouncedSearchTerm = useDebounce<string | null>(searchTerm, 500);

  console.log(debouncedSearchTerm);

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchSearchMovie(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  const fetchSearchMovie = async (searchTerm: string) => {
    try {
      const request = await axios.get('/search/multi', {
        params: {
          include_adult: false,
          query: searchTerm,
        },
      });
      console.log(request);
      setSearchResults(request.data.results);
    } catch (error) {
      console.warn(error);
    }
  };

  const renderSearchResults = () => {
    return searchResults.length > 0 ? (
      <section className="search-container">
        {searchResults.map((movie: IMovie) => {
          if (movie.backdrop_path !== null && movie.media_type !== 'person') {
            const movieImageUrl = 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path;
            return (
              <div className="movie" key={movie.id}>
                <div onClick={() => navigate(`/${movie.id}`)} className="movie__column-poster">
                  <img src={movieImageUrl} alt="movie image" className="movie__poster" />
                </div>
              </div>
            );
          }
        })}
      </section>
    ) : (
      <section className="no-results">
        <div className="no-results__text">
          <p>찾고자하는 검색어"{debouncedSearchTerm}"에 맞는 영화가 없습니다.</p>
        </div>
      </section>
    );
  };

  return renderSearchResults();
}
