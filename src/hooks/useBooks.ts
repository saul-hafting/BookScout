import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


export interface Book {
    id: string;
    volumeInfo: {
      title: string;
      authors?: string[];
      description?: string;
      imageLinks?: { thumbnail?: string };
      infoLink?: string;
    };
  }
  
  interface FetchBooksResponse {
    items: Book[];
  }

const useBooks = () => {
    const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchBooks = async () => {
      try {
        const response = await apiClient.get<FetchBooksResponse>(
          "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=20", {signal: controller.signal} 
        );
        setBooks(response.data.items);
      } catch (err) {
        if (err instanceof CanceledError) return;
        setError("Failed to fetch books");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
    return () => controller.abort();
  }, []);

  

  return { books, error, loading };
};

export default useBooks;