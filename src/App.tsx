import React, { useState } from 'react';
import { Box, Grid, GridItem, Show } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import BookGrid from './components/BookGrid';
import GenreList from './components/GenreList';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: '1fr',
          lg: '200px 1fr',
        }}
      >
        <GridItem area="nav">
          <Navbar/>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" p={4}>
            <GenreList onSelectGenre={setSelectedGenre} />
          </GridItem>
        </Show>
        <GridItem area="main" p={4}>
          <BookGrid selectedGenre={selectedGenre} searchQuery={searchQuery} />
        </GridItem>
      </Grid>
  );
}

export default App;