import Header from '../components/Header';
import Filters from '../components/Filters';
import ProductList from '../components/ProductList';

const HomePage = () => {
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
