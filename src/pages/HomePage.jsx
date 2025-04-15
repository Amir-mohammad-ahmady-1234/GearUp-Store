import Header from "../components/Header";
import Filters from "../components/Filters";
import ProductList from "../components/ProductList";
import { useAuth } from "../contexts/AuthContext";
import { fetching } from "../features/product/productSlice";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("login");
    },
    [isAuthenticated]
  );

  useEffect(
    function () {
      if (isAuthenticated) dispatch(fetching());
    },
    [isAuthenticated]
  );

  return (
    <div>
      <Header />
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/4 p-4">
          <Filters />
        </div>
        <div className="lg:w-3/4 p-4">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
