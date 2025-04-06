const LoginPage = () => {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
          {/* عنوان صفحه */}
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back!</h2>
  
          {/* فرم لاگین */}
          <form>
            {/* فیلد ایمیل */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            {/* فیلد رمز عبور */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            {/* دکمه لاگین */}
            <div className="mb-4">
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
              >
                Login
              </button>
            </div>
  
            {/* لینک ثبت‌نام */}
            <div className="text-center">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <a href="#" className="text-blue-600 hover:underline">Sign up</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default LoginPage;
  