import { useState, useEffect } from 'react';
import axios, { CanceledError } from 'axios';

export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    description?: string;
    imageLinks?: { thumbnail?: string };
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

const useBooks = (genre: string | null, query: string) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchBooks = async () => {
      try {
        const response = await axios.get<FetchBooksResponse>(
          `https://www.googleapis.com/books/v1/volumes?q=*&maxResults=20`, { signal: controller.signal }
        );
        if (response.data.items) {
          setBooks(response.data.items);
        } else {
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
  }, [genre, query]);

  return { books, error, loading };
};

export default useBooks;