import { useState, useEffect } from "react";
import axios from "axios";

interface Genre {
  id: string;
  name: string;
  image: string;
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchGenres = async () => {
      setLoading(true);
      try {
        const response = await axios.get<Genre[]>("https://api.example.com/genres");
        setGenres(response.data);
      } catch (err) {
        setError("Failed to fetch genres");
      } finally {
        setLoading(false);
      }
    };

    fetchGenres();
  }, []);

  return { genres, error, loading };
};

export default useGenres;