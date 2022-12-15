import React, { useState, useRef } from "react";
import Row from "../components/Row";
import { modalState, movieState } from "../atoms/modalAtom";
import { Movie } from "../typings";
import { useRecoilValue } from "recoil";
import Modal from "../components/Modal";
import Header from "../components/Header";
import Thumbnail from "../components/Thumbnail";
import { DocumentData } from "firebase/firestore";

const TMDBSearch = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[] | DocumentData[]>([]);
  const [tvs, setTvs] = useState<Movie[] | DocumentData[]>([]);
  const showModal = useRecoilValue(modalState);
  const searchRef = useRef<HTMLInputElement>(null);

  let timeout: NodeJS.Timeout;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      if (query && query.length > 1) {
        getResults();
      }
    }, 500);
  };

  const getResults = () => {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
    const searchMoviesUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
    const searchTvsUrl = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

    fetch(searchMoviesUrl)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));

    fetch(searchTvsUrl)
      .then((response) => response.json())
      .then((data) => setTvs(data.results));
  };

  return (
    <div
      className={`relative h-screen bg-gradient-to-b lg:h-[140vh] ${
        showModal && "!h-screen overflow-hidden"
      }`}
    >
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <div className="search md:container mx-auto">
          <p className="w-56 cursor-pointer pb-4 text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white">
            Enter the movie or TV show's name
          </p>
          <form className="search__form">
            <input
              className="search__input text-2xl font-bold md:text-4xl lg:text-7xl"
              placeholder="Search for a movie..."
              ref={searchRef}
              onChange={handleInputChange}
            />
          </form>
        </div>

        <section className="md:space-y-24">
          {movies.length > 0 && <Row title="Movies" movies={movies} />}
          {tvs.length > 0 && <Row title="TV Shows" movies={tvs} />}
        </section>
      </main>

      {showModal && <Modal />}
    </div>
  );
};
export default TMDBSearch;
