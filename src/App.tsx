import { ThemeProvider } from 'styled-components';
import { getTheme, ThemeName } from './style/theme'; 
import { GlobalStyle } from './style/global';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ThemeSwitcher from './components/header/ThemeSwitcher';
import { useState } from 'react';

function App() {
  // 현재 UI 테마 상태 관리 (light/dark 전환)
  const [themeName, setThemeName] = useState<ThemeName>("light");

  return (
    <>
      <ThemeProvider theme={getTheme(themeName)}>
        <GlobalStyle themeName={themeName} />
        <ThemeSwitcher themeName={themeName} setThemeName={setThemeName} />
        {/* <Layout children={<Home/>} /> */}
        <Layout>
          <Home />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
