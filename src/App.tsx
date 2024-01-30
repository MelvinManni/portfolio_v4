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

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/blog"
            element={
              <Layout>
                <BlogPage />
              </Layout>
            }
          />

          {/* Wildcard redirects to '/' */}
          <Route
            path="*"
            element={
              <Layout>
                <BlogPage />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
