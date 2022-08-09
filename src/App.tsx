import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Layout from "layouts";
import HomePage from "pages/Home";
import BlogPage from "pages/Blog";
import theme from "config/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
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
