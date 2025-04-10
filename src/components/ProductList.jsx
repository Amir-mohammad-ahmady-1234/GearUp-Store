import ProductCard from './ProductCard';
import LoadingPage from './LoadingPage'
import ErrorPage from './ErrorPage';

import {useSelector} from 'react-redux'

const ProductList = () => {
  const {isLoading, err} = useSelector(state => state.product)

  if (err) return <ErrorPage />
  if (isLoading) return <LoadingPage />

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductList;
