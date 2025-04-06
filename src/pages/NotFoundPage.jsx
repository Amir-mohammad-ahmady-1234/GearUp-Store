import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 text-white p-4">
      <div className="text-center">
        {/* شماره 404 */}
        <h1 className="text-6xl font-extrabold mb-4">404</h1>
        {/* پیغام */}
        <p className="text-xl mb-6">Oops! The page you are looking for does not exist.</p>
        {/* دکمه برگشت */}
        <Link
          to="/"
          className="inline-block px-6 py-3 text-lg font-semibold text-blue-600 bg-white rounded-md shadow-md hover:bg-gray-100 transition"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
