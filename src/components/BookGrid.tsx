import React from 'react';
import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import BookCard from "./BookCard";
import useBooks from "../hooks/useBooks";
import BookGardSkeleton from "./BookGardSkeleton";

interface Props {
  selectedGenre: string | null;
  searchQuery: string;
}

const BookGrid = ({ selectedGenre, searchQuery }: Props) => {
  const { books, error, loading } = useBooks(selectedGenre, searchQuery);
  const Skeletons = [1, 2, 3, 4, 5, 6];

  if (loading) return <Spinner />;
  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      padding="10px"
      spacing={10}
    >
      {loading &&
        Skeletons.map((skeleton) => <BookGardSkeleton key={skeleton} />)}
      {!loading &&
        books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
    </SimpleGrid>
  );
};

export default BookGrid;