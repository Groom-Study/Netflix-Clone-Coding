import { useEffect, useState, type ChangeEvent } from 'react';
import './Nav.css';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Nav() {
  const [show, setShow] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const trimmed = value.trim();
    setSearchValue(value);
    if (trimmed.length >= 2) {
      navigate(`/search?q=${encodeURIComponent(trimmed)}`);
    } else {
      navigate('/');
    }
  };

  return (
    <nav className={`nav ${show && 'nav__black'}`}>
      <img
        alt="Netflix logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
        className="nav__logo"
        onClick={() => {
          if (pathname === '/') {
            window.location.reload();
          } else {
            navigate('/');
          }
        }}
      />

      <input
        value={searchValue}
        className="nav__input"
        onChange={handleChange}
        type="text"
        placeholder="검색"
      />

      <img
        alt="Avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        className="nav__avatar"
      />
    </nav>
  );
}
