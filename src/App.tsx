import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import HomePage from "pages/Home";
import BlogPage from "pages/Blog";
import theme from "config/theme";
import GlobalStyle from "jss/global";
import Layout from "layouts";
import BacktoTop from "components/composed/BacktoTop";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BacktoTop />
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
