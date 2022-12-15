import { FavouriteMovie, Movie } from "../typings";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";
import { DocumentData } from "firebase/firestore";

interface Props {
  movie: Movie | FavouriteMovie | DocumentData;
}

function Thumbnail({ movie }: Props) {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  return (
    <div
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-200
    ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
      onClick={() => {
        setCurrentMovie(movie);
        setShowModal(true);
      }}
    >
      {"image_url" in movie ? (
        <Image
          src={`https://image.tmdb.org/t/p/w500${
            (movie as FavouriteMovie).image_url
          }`}
          className="rounded-sm object-cover md:rounded"
          layout="fill"
          alt=""
        />
      ) : (
        <Image
          src={`https://image.tmdb.org/t/p/w500${
            (movie as Movie).backdrop_path || (movie as Movie).poster_path
          }`}
          className="rounded-sm object-cover md:rounded"
          layout="fill"
          alt=""
        />
      )}
    </div>
  );
}

export default Thumbnail;
