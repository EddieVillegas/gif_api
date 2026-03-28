import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async (url) => {
      setError(false);
      setLoading(true);
      try {
        const response = await fetch(url);

        if (!response.ok) throw new Error("somethin was wrong");

        const { data, pagination } = await response.json();

        const calcTotalPages = Math.ceil(pagination.total_count / 5);

        setData(data);

        setTotalPages(calcTotalPages);
      } catch (error) {
        console.error(error)
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    if(url) fetchData(url);
  }, [url]);

  return {
    data,
    error,
    isLoading,
    totalPages,
  };
};
