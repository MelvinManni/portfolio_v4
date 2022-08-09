import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import HomePage from "pages/Home";
import BlogPage from "pages/Blog";
import theme from "config/theme";
import GlobalStyle from "jss/global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
