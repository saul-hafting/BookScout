import { Grid, GridItem, useBreakpointValue, Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box bg="white" minH="100vh">
      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}>
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        {useBreakpointValue({ base: null, lg: (
          <GridItem area="aside" bg="gold">
            Aside
          </GridItem>
        )})}
        <GridItem area="main" bg="dodgerblue">
          Main
        </GridItem>
      </Grid>
    </Box>
  );
}

export default App;
