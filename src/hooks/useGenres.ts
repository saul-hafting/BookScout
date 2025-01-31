import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";

interface Genre {
  id: string;
  name: string;
  image: string;
}

interface Book {
  id: string;
  volumeInfo: {
    categories?: string[];
    imageLinks?: { thumbnail?: string };
  };
}

interface FetchGenresResponse {
  items: Book[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchGenres = async () => {
      try {
        const response = await axios.get<FetchGenresResponse>(
          "https://www.googleapis.com/books/v1/volumes?q=*&maxResults=20", { signal: controller.signal }
        );
        if (response.data.items) {
          const genreMap = new Map<string, string>();
          response.data.items.forEach(book => {
            book.volumeInfo.categories?.forEach(category => {
              if (!genreMap.has(category) && book.volumeInfo.imageLinks?.thumbnail) {
                genreMap.set(category, book.volumeInfo.imageLinks.thumbnail);
              }
            });
          });
          const genresArray = Array.from(genreMap.entries()).map(([name, image], index) => ({
            id: index.toString(),
            name,
            image
          }));
          setGenres(genresArray);
        } else {
          setError("No genres found");
        }
      } catch (err) {
        if (err instanceof CanceledError) return;
        setError("Failed to fetch genres");
      } finally {
        
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchGenres();
    return () => controller.abort();
  }, []);

  return { genres, error, loading };
};

export default useGenres;