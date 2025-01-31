import React from 'react';
import { Box, List, ListItem, Text, HStack, Button, useColorMode } from '@chakra-ui/react';

interface Props {
  onSelectGenre: (genre: string | null) => void;
  selectedGenre: string | null;
}

const genres = [
  { id: '1', name: 'Fiction' },
  { id: '2', name: 'Non-Fiction' },
  { id: '3', name: 'Science' },
  { id: '4', name: 'History' },
  { id: '5', name: 'Fantasy' },
  { id: '6', name: 'Biography' },
  { id: '7', name: 'Mystery' },
  { id: '8', name: 'Romance' },
  { id: '9', name: 'Thriller' },
  { id: '10', name: 'Self-Help' },
];

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { colorMode } = useColorMode();
  const textColor = colorMode === 'dark' ? 'white' : 'black';

  return (
    <Box>
      <Text fontSize="2xl" mb={4} color={textColor}>Genres</Text>
      <List spacing={3}>
        <ListItem>
          <HStack>
            <Button
              onClick={() => onSelectGenre(null)}
              fontSize='lg'
              variant='link'
              color={selectedGenre === null ? 'teal.500' : textColor}
            >
              Any Genre
            </Button>
          </HStack>
        </ListItem>
        {genres.map((genre) => (
          <ListItem key={genre.id}>
            <HStack>
              <Button
                onClick={() => onSelectGenre(genre.name)}
                fontSize='lg'
                variant='link'
                color={selectedGenre === genre.name ? 'teal.500' : textColor}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default GenreList;