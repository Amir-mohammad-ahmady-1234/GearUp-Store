import ProductCard from "./ProductCard";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";

import { useSelector } from "react-redux";
import NoResultFinded from "./NoResultFinded";

const ProductList = () => {
  const { isLoading, err, filteredProducts } = useSelector(
    (store) => store.product
  );

  if (err) return <ErrorPage />;
  if (isLoading) return <LoadingPage />;

  return (
    <>
      {filteredProducts.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
          {filteredProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      ) : (
        <NoResultFinded />
      )}
    </>
  );
};

export default ProductList;
