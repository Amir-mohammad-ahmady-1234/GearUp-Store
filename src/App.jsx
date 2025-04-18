import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./contexts/AuthContext";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasketPage from "./pages/BasketPage";
import { useSelector } from "react-redux";

function App() {
  const { storedProducts } = useSelector((state) => state.basket);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="basket" element={<BasketPage cartItems={storedProducts} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

// i get my photos from this site => https://shopping-blush-nine.vercel.app/home
// fakeapistore web site => https://fakestoreapi.com/
