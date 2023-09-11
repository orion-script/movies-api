import { useEffect, useState } from "react";
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/movieList";
import Header from "../../components/header/Header";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  // const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => {
        setPopularMovies(data.results);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  useEffect(() => {
    // Filter the movies based on the searchField
    const lowercasedSearchField = searchField.toLowerCase();
    const filteredMovies = popularMovies.filter((movie) =>
      movie.original_title.toLowerCase().includes(lowercasedSearchField)
    );
    setFilteredMovies(filteredMovies);
  }, [popularMovies, searchField]);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <>
      <div className="w-full">
        {/* <div>
          <input
            type="search"
            name=""
            id=""
            value={searchField}
            onChange={onSearchChange}
            className="text-black"
            placeholder="Search movies..."
          />
        </div> */}

        <div>
          <Header onSearchChange={onSearchChange} searchField={searchField} />
          {errorMessage && (
            <div className="font-bold text-center text-xl italic mt-20">
              {errorMessage}
            </div>
          )}

          <div>
            <Carousel
              showThumbs={false}
              autoPlay={true}
              transitionTime={3}
              infiniteLoop={true}
              showStatus={false}
            >
              {filteredMovies.map((movie) => (
                <Link
                  key={movie.id}
                  to={`/movie/${movie.id}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <div className="h-[450px] w-full md:h-[600px] relative">
                    <img
                      src={`https://image.tmdb.org/t/p/original${
                        movie.backdrop_path || movie.poster_path
                      }`}
                      alt={movie.original_title}
                      className="object-cover w-full h-full bg-center bg-cover bg-no-repeat"
                    />
                    <div className="posterImage__overlay">
                      <div className="posterImage__title">
                        {movie.original_title}
                      </div>
                      <div className="posterImage__runtime">
                        {movie.release_date}
                        <span className="posterImage__rating">
                          {movie.vote_average} <i className="fas fa-star" />
                        </span>
                      </div>
                      <div className="posterImage__description">
                        {movie.overview}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </Carousel>
          </div>
        </div>
        <MovieList movies={filteredMovies} />
      </div>
    </>
  );
};

export default Home;
