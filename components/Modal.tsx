import MuiModal from "@mui/material/Modal";
import { modalState, movieState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";
import XIcon from "@heroicons/react/outline/XIcon";
import { Movie } from "../typings";
import { useEffect, useState } from "react";
import { Element, Genre } from "../typings";
import ReactPlayer from "react-player/lazy";
import { FaPlay } from "react-icons/fa";
import { PlusIcon, ThumbUpIcon, VolumeOffIcon } from "@heroicons/react/solid";
import { CheckIcon, VolumeUpIcon } from "@heroicons/react/outline";
import {
  collection,
  deleteDoc,
  doc,
  DocumentData,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import useAuth from "../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";

function Modal() {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [fetchedMovie, setFetchedMovie] = useState<Movie>();
  const [movie, setMovie] = useRecoilState<Movie>(movieState);
  const [trailer, setTrailer] = useState("");
  const [genres, setGenres] = useState<Genre[]>([]);
  const [muted, setMuted] = useState(true);
  const [addedToList, setAddedToList] = useState(false);
  const { user } = useAuth();
  const [movies, setMovies] = useState<DocumentData[] | Movie[]>([]);

  useEffect(() => {
    if (!movie) return;

    async function fetchMovie() {
      console.log("Fetching movie");

      const data = await fetch(getFetchUrl(movie!)).then((response) =>
        response.json()
      );

      setFetchedMovie(data);

      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (element: Element) => element.type === "Trailer"
        );
        setTrailer(data.videos?.results[index]?.key);
      }

      if (data?.genres) {
        setGenres(data.genres);
      }
    }
    fetchMovie();
  }, [movie]);

  useEffect(() => {
    if (user) {
      return onSnapshot(
        collection(db, "customers", user.uid, "myList"),
        (snapshot) => setMovies(snapshot.docs)
      );
    }
  }, [db, movie?.id]);

  useEffect(
    () =>
      setAddedToList(
        movies.findIndex((result) => result.data().id === movie?.id) !== -1
      ),
    [movies]
  );

  const handleList = async () => {
    if (addedToList) {
      await deleteDoc(
        doc(db, "customers", user!.uid, "myList", movie?.id.toString()!)
      );

      await fetch("/api/deleteMedia", {
        body: JSON.stringify({
          userId: user!.uid,
          mediaId: movie?.id,
          mediaType: movie?.media_type ?? "movie",
        }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });

      toast(
        `"${
          fetchedMovie?.title || fetchedMovie?.original_name
        }" has been removed from your favorite list`,
        {
          duration: 8000,
        }
      );
    } else {
      await setDoc(
        doc(db, "customers", user!.uid, "myList", movie?.id.toString()!),
        { ...movie }
      );

      console.table({
        userId: user!.uid,
        movieId: movie?.id,
        mediaType: movie?.media_type,
        imageUrl: movie.backdrop_path,
      });

      await fetch("/api/addMovieToList", {
        body: JSON.stringify({
          userId: user!.uid,
          movieId: movie?.id,
          mediaType: movie?.media_type ?? "movie",
          imageUrl: movie.backdrop_path,
        }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });

      toast(
        `"${
          fetchedMovie?.title || fetchedMovie?.original_name
        }" has been added the your favorite list`,
        {
          duration: 8000,
        }
      );
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className="fixex !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl
    overflow-y-scroll rounded-md scrollbar-hide"
    >
      <>
        <Toaster position="bottom-center" />
        <button
          onClick={handleClose}
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none
        bg-[#181818] hover:bg-[#181818]"
        >
          <XIcon className="h-6 w-6" />
        </button>

        <div className="relative pt-[56.25%]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
            style={{ position: "absolute", top: "0", left: "0" }}
            playing
            muted={muted}
          />
          <div
            className="absolute bottom-10 flex w-full items-center justify-between
          px-10"
          >
            <div className="flex space-x-2">
              <button className="modalButton" onClick={handleList}>
                {addedToList ? (
                  <CheckIcon className="h-7 w-7" />
                ) : (
                  <PlusIcon className="h-7 w-7" />
                )}
              </button>
            </div>

            <button className="modalButton" onClick={() => setMuted(!muted)}>
              {muted ? (
                <VolumeOffIcon className="h-6 w-6" />
              ) : (
                <VolumeUpIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8">
          <div className="space-y-6 text-lg">
            <div className="flex items-center space-x-2 text-sm">
              <p className="font-semibold text-green-400">
                Rating: {fetchedMovie?.vote_average.toFixed(1)}
              </p>
              <p className="font-light">
                {fetchedMovie?.release_date || fetchedMovie?.first_air_date}
              </p>
              <div
                className="flex h-4 items-center justify-center rounded border
          border-white/40 px-1.5 text-xs"
              >
                HD
              </div>
            </div>

            <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
              <div className="w-5/6">
                <h2 className="text-2xl font-bold pb-3">
                  {fetchedMovie?.title || fetchedMovie?.name}
                </h2>
                <p>{fetchedMovie?.overview}</p>
              </div>
              <div className="flex flex-col space-y-3 text-sm">
                <div>
                  <span className="text-[gray]">Genres: </span>
                  {genres.map((genre) => genre.name).join(", ")}
                </div>

                <div>
                  <span className="text-[gray]">Original language: </span>
                  {fetchedMovie?.original_language.toUpperCase()}
                </div>
                <div>
                  <span className="text-[gray]">Total votes: </span>
                  {fetchedMovie?.vote_count}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </MuiModal>
  );
}

const getFetchUrl = (movie: Movie): string =>
  `https://api.themoviedb.org/3/${movie.media_type === "tv" ? "tv" : "movie"}/${
    movie.id
  }?api_key=${
    process.env.NEXT_PUBLIC_API_KEY
  }&language=en-US&append_to_response=videos`;

export default Modal;
