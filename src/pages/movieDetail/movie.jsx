import { useEffect, useState } from "react";
import "./movie.css";
import { useParams, Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
// import Header from "../../components/header/Header";

const Movie = () => {
  const [currentMovieDetail, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  };

  return (
    <>
      <Link to="/" className="">
        <button className="bg-gray-700 h-10 w-20 ml-5 md:ml-20 my-10 rounded-lg text-white font-mono shadow-lg">
          Back
        </button>
      </Link>
      <div className="movie">
        <div className="movie__intro">
          <img
            className="movie__backdrop"
            src={`https://image.tmdb.org/t/p/original${
              currentMovieDetail ? currentMovieDetail.backdrop_path : ""
            }`}
          />
        </div>
        <div className="movie__detail">
          <div className="movie__detailLeft">
            <div className="movie__posterBox">
              <img
                className="movie__poster"
                src={`https://image.tmdb.org/t/p/original${
                  currentMovieDetail ? currentMovieDetail.poster_path : ""
                }`}
              />
            </div>
          </div>
          <div className="movie__detailRight">
            <div className="movie__detailRightTop">
              <div className="movie__name" data-testid="movie-title">
                {currentMovieDetail ? currentMovieDetail.original_title : ""}
              </div>
              <div className="movie__tagline">
                {currentMovieDetail ? currentMovieDetail.tagline : ""}
              </div>
              <div className="movie__rating">
                {currentMovieDetail ? currentMovieDetail.vote_average : ""}{" "}
                <i className="fas fa-star" />
                <span className="movie__voteCount">
                  {currentMovieDetail
                    ? "(" + currentMovieDetail.vote_count + ") votes"
                    : ""}
                </span>
              </div>
              <div className="movie__runtime" data-testid="movie-runtime">
                {currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}
              </div>
              <div
                className="movie__releaseDate"
                data-testid="movie-release-date"
              >
                {currentMovieDetail
                  ? "Release date: " + currentMovieDetail.release_date
                  : ""}
              </div>
              <div className="movie__genres">
                {currentMovieDetail && currentMovieDetail.genres
                  ? currentMovieDetail.genres.map((genre) => (
                      <>
                        <span className="movie__genre" id={genre.id}>
                          {genre.name}
                        </span>
                      </>
                    ))
                  : ""}
              </div>
            </div>
            <div className="movie__detailRightBottom">
              <div className="synopsisText">Synopsis</div>
              <div data-testid="movie-overview">
                {currentMovieDetail ? currentMovieDetail.overview : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[29rem] md:mt-0">
        <Footer />
      </div>
    </>
  );
};

export default Movie;
