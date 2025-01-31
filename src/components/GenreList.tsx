import React from 'react';
import { Box, List, ListItem, Spinner, Text, Image, HStack, Button } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';

interface Props {
    onSelectGenre: (genre: string) => void;
}

const GenreList = ({onSelectGenre}: Props) => {
  const { genres, error, loading } = useGenres();

  if (loading) return <Spinner />;
  if (error) return <Text>{error}</Text>;

  return (
    <Box>
      <List spacing={3}>
        {genres.map((genre) => (
          <ListItem key={genre.id}>
            <HStack>
              <Image boxSize="40px" src={genre.image} alt={genre.name} borderRadius="md" />
              <Button onClick={() => onSelectGenre(genre.name)} fontSize='lg' variant='link'>{genre.name}</Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default GenreList;