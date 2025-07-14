import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import LoadingSpinner from './LoadingSpinner';
import Input from './Input';

const LoginPage = ({ onSwitchToSignup }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize navigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading animation

    console.log('Login Data:', formData);

    // Simulate an API call or login process
    setTimeout(() => {
      setLoading(false); // Stop loading animation
      // Removed: alert('Login successful for: ' + formData.email);
      navigate('/cards'); // Navigate to the /cards route after 3 seconds
    }, 3000); // Simulate a 3-second login process
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8 -mt-24">
      <div className="w-[30vw] min-w-[320px] space-y-16 p-10 bg-white rounded-lg shadow-xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login to Your Account
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-10">
          <div className="rounded-md shadow-sm -space-y-px">
            <Input
              label="Email address"
              type="email"
              id="email-login"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
            <Input
              label="Password"
              type="password"
              id="password-login"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-500 hover:bg-[#40c1ac] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-150 ease-in-out"
              disabled={loading} // Disable button while loading
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                'Login'
              )}
            </button>
          </div>
        </form>
        <div className="text-center text-sm">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <button
              onClick={onSwitchToSignup}
              className="font-medium text-[#40c1ac] hover:text-teal-500 focus:outline-none"
              disabled={loading} // Disable signup button while loading
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
      {loading && <LoadingSpinner />} {/* Conditionally render the spinner */}
    </div>
  );
};

export default LoginPage;