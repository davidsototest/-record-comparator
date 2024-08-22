import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import ComparatorPage from "./pages/ComparatorPage";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import { Box } from "@mui/material";
import { MaxWidth } from "./pages/measures";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "toastify-js/src/toastify.css";

function App() {
  return (
    <BrowserRouter>
      <Box
        sx={{
          maxWidth: MaxWidth,
          margin: "auto",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Navbar />
      </Box>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/comparator" element={<ComparatorPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
