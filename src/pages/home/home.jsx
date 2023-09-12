import { useEffect, useState } from "react";
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/movieList";
import Header from "../../components/header/Header";

const Home = () => {
  const [searchField, setSearchField] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [defaultMovies, setDefaultMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => {
        setDefaultMovies(data.results);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const handleSearch = () => {
    if (searchField === "") {
      alert("Input a movie title");
    } else {
      setIsLoading(true);

      setTimeout(() => {
        const lowercasedSearchField = searchField.toLowerCase();
        const filteredMovies = defaultMovies.filter((movie) =>
          movie.original_title.toLowerCase().includes(lowercasedSearchField)
        );

        setIsLoading(false);
        setFilteredMovies(filteredMovies);

        if (filteredMovies.length === 0) {
          setErrorMessage("Search not found");
        } else {
          setErrorMessage("");
        }
      }, 1500);
      setSearchField("");
    }
  };

  return (
    <>
      <div className="w-full">
        <Header
          searchField={searchField}
          onSearchChange={onSearchChange}
          handleSearch={handleSearch}
        />

        <div>
          {errorMessage && (
            <div className="font-bold text-center text-xl italic mt-20">
              {errorMessage}
            </div>
          )}
          <div>
            {isLoading ? (
              <div className="text-center font-bold text-xl mt-4">
                Loading...
              </div>
            ) : (
              <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={3}
                infiniteLoop={true}
                showStatus={false}
              >
                {(filteredMovies.length > 0
                  ? filteredMovies
                  : defaultMovies
                ).map((movie) => (
                  <Link
                    key={movie.id}
                    to={`/movie/${movie.id}`}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <div className="posterImage h-[400px] md:h-[500px]">
                      <img
                        src={`https://image.tmdb.org/t/p/original${
                          movie.backdrop_path || movie.poster_path
                        }`}
                        alt={movie.original_title}
                      />
                    </div>
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
                  </Link>
                ))}
              </Carousel>
            )}
          </div>
        </div>
        <MovieList movies={filteredMovies} />
      </div>
    </>
  );
};

export default Home;
