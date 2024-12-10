import { useState, useEffect } from "react";
import axios from "axios";

// Define the types for the hook's return value
interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

// Custom hook that accepts the URL as a parameter
const useFetch = <T,>(url: string): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_FE_URL}${url}`
        );
        setData(response.data); // Set the response data
      } catch (err: any) {
        setError("Error fetching data"); // Handle error
      } finally {
        setLoading(false); // Set loading to false after request
      }
    };

    if (url) {
      fetchData();
    }
  }, [url]); // Depend on URL, so it refetches when the URL changes

  return { data, loading, error };
};

export default useFetch;
