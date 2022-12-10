import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useDebouncedState } from '@mantine/hooks';
import HomePage from './components/landingPage/homePage';

function App() {
  
  const [colorScheme, setColorScheme] = useDebouncedState<ColorScheme>('dark', 100);
  
  const toggleColorScheme = () => {
    setColorScheme((colorScheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ColorSchemeProvider colorScheme={ colorScheme } toggleColorScheme={ toggleColorScheme }>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
        <BrowserRouter>
          <Routes>

            <Route path="/" element={ <HomePage colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}/> } />

          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
