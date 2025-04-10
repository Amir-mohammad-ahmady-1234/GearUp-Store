import ProductCard from './ProductCard';
import {useSelector} from 'react-redux'

const ProductList = () => {
  const {isLoading} = useSelector(state => state.product)

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
