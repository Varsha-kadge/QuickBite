import { useState } from 'react';

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      // handle sign-up logic
      console.log('Signing up with:', formData);
    } else {
      // handle sign-in logic
      console.log('Signing in with:', formData);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 px-4'>
      <div className='bg-white w-full max-w-md p-8 rounded-xl shadow-xl border border-gray-200'>
        <h2 className='text-2xl font-bold text-center text-gray-800 mb-6'>
          {isSignUp ? 'Create an Account' : 'Welcome Back'}
        </h2>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <input
            type='email'
            name='email'
            placeholder='Email'
            required
            value={formData.email}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400'
          />

          <input
            type='password'
            name='password'
            placeholder='Password'
            required
            value={formData.password}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400'
          />

          <button
            type='submit'
            className='w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition duration-200'>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        <p className='text-center text-sm text-gray-600 mt-6'>
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}
          <button
            type='button'
            onClick={() => setIsSignUp(!isSignUp)}
            className='text-green-600 font-semibold ml-1 hover:underline'>
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
}
