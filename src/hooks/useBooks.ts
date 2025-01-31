import { useState, useEffect } from "react";
import axios, { CanceledError } from "axios";

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    description?: string;
    imageLinks?: {
      thumbnail?: string;
    };
    infoLink?: string;
    pageCount?: number;
    publishedDate?: string;
    categories?: string[];
  };
  searchInfo?: {
    textSnippet?: string;
  };
}

interface FetchBooksResponse {
  items: Book[];
}

const useBooks = (query: string, selectedGenre: string | null) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchBooks = async () => {
      setLoading(true);
      setError(null); // Reset error state before fetching new data
      try {
        let searchQuery = '';

        if (query) {
          searchQuery = `intitle:${query}`;
        }

        if (selectedGenre) {
          searchQuery += searchQuery ? `+subject:${selectedGenre}` : `subject:${selectedGenre}`;
        }

        if (!searchQuery) {
          searchQuery = 'subject:fiction';
        }

        const response = await axios.get<FetchBooksResponse>(
          `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchQuery)}&maxResults=20`,
          { signal: controller.signal }
        );

        if (response.data.items) {
          setBooks(response.data.items);
        } else {
          setBooks([]); // Ensure books state is cleared if no books are found
          setError("No books found");
        }
      } catch (err) {
        if (err instanceof CanceledError) return;
        setError("Failed to fetch books");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();

    return () => controller.abort();
  }, [query, selectedGenre]);

  return { books, error, loading };
};

export default useBooks;