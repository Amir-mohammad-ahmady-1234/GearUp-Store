import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

function LoginError({ isErrorCanShowing, setIsErrorCanShowing }) {
  const { err } = useAuth();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(function () {
    const timer = setTimeout(() => {
      setIsErrorCanShowing(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setIsErrorCanShowing(false)
  };

  if (!isVisible) return null;

  return (
    <>
        <div
          className="fixed top-4 right-4 bg-red-600 text-white p-5 rounded-lg shadow-lg flex items-center space-x-4 animate-slideIn transform transition-all duration-700 ease-in-out"
          style={{ animation: "slideIn 0.7s ease-in-out" }}
        >
          <div className="text-xl">
            <i className="fas fa-exclamation-circle"></i>
          </div>
          <div>
            <p className="font-semibold">{err}</p>
            <p>please try again.</p>
          </div>
          <button
            className="text-white hover:text-gray-300 ml-4"
            onClick={handleClose}
          >
            <i className="fas fa-times">&times;</i>
          </button>
        </div>
    </>
  );
}

export default LoginError;
