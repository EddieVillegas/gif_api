import { useState, useEffect } from "react";
import M from "materialize-css";
import SearchBar from "./components/SearchBar";
import GifList from "./components/GifList";
import Modal from "./components/Modal";
import Error from "./components/Error";
import Header from "./components/Header";
import Paginator from "./components/Paginator";
import Preloader from "./components/Preloader";
import "materialize-css/dist/css/materialize.min.css";
import ModalProvider from "./context/ModalContext";
import { useFetch } from "./hooks/useFetch";
import { useDebounce } from "./hooks/useDebounce";

const gifsPerPage = 5;
const api_key = "mkQkcuGKSxsbg1UVv9EQDREPs5MKsPvM";

export default function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const debouncedName = useDebounce(name);

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${debouncedName}&limit=${gifsPerPage}&offset=${currentPage}`;

  const { data, error, isLoading, totalPages } = useFetch(url);

  useEffect(() => {
    M.Modal.init(document.getElementById("modal"));
    const top = document.querySelector(".container");
    top.scrollIntoView({ behavior: "smooth" });
  }, [debouncedName]);

  const showBackButton = currentPage === 0 || name === "";

  const showNextButton = currentPage === totalPages || name === "";

  const backPage = () => {
    const newCurrentPage =
      currentPage === 0 ? currentPage : currentPage - gifsPerPage;

    setCurrentPage(newCurrentPage);
  };

  const nextPage = () => {
    const newCurrentPage =
      currentPage === totalPages ? currentPage : currentPage + gifsPerPage;

    setCurrentPage(newCurrentPage);
  };

  if (isLoading) return <Preloader />;

  if (error) return <Error message={"something was wrong"} />;

  return (
    <ModalProvider>
      <Header title="Search Gifs" />

      <main className="container white">
        <Modal />

        <SearchBar setName={setName} />

        <GifList gifList={data} />

        <Paginator
          nextPage={nextPage}
          backPage={backPage}
          showBackButton={showBackButton}
          showNextButton={showNextButton}
        />
      </main>
    </ModalProvider>
  );
}
