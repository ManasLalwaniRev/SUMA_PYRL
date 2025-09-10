// // src/components/LoginPage.jsx

// import { useState } from 'react';
// import { FaMicrosoft } from 'react-icons/fa';

// export default function LoginPage({ onLogin }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');

//     try {
//       await onLogin(username, password);
//     } catch (err) {
//       setError('Invalid username or password. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // This function will handle the redirect to the backend
//   const handleMicrosoftLogin = () => {
//   // window.location.href = 'http://localhost:5001/auth/microsoft';
//   // window.location.href = 'https://suma-pyrl.vercel.app/auth/microsoft';
//   window.location.href = 'https://suma-pyrl.onrender.com/auth/microsoft';
//   };

//   return (
//     <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-sm text-center">
//       <h2 className="text-3xl font-bold mb-8 text-indigo-600">Payroll Portal Login</h2>
//       <form onSubmit={handleSubmit} className="space-y-5">
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all"
//           placeholder="Username"
//           required
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all"
//           placeholder="Password"
//           required
//         />
        
//         {error && (
//           <p className="text-sm text-red-600 bg-red-50 p-3 rounded-lg">{error}</p>
//         )}

//         <button
//           type="submit"
//           disabled={isLoading}
//           className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors shadow-md disabled:bg-indigo-400 disabled:cursor-not-allowed"
//         >
//           {isLoading ? 'Signing In...' : 'Login'}
//         </button>
//       </form>

//       <div className="relative my-6">
//         <div className="absolute inset-0 flex items-center">
//           <span className="w-full border-t border-gray-300" />
//         </div>
//         <div className="relative flex justify-center text-sm">
//           <span className="bg-white px-2 text-gray-500">Or continue with</span>
//         </div>
//       </div>

//       <div>
//         <button 
//           onClick={handleMicrosoftLogin}
//           className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
//         >
//           <FaMicrosoft className="text-blue-600" />
//           Sign in with Microsoft
//         </button>
//       </div>
//     </div>
//   );
// }



import { useState, useEffect } from 'react';

// This is the LoginPage component from your code, slightly refactored to be
// a part of this single-file application.
const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await onLogin(username, password);
    } catch (err) {
      setError('Invalid username or password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleMicrosoftLogin = () => {
    // This is the Microsoft login redirect, which we commented out in the backend.
    // This button will not work with the updated backend code.
    window.location.href = 'https://suma-pyrl.onrender.com/auth/microsoft';
  };

  return (
    <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-sm text-center">
      <h2 className="text-3xl font-bold mb-8 text-indigo-600">Payroll Portal Login</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all"
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all"
          placeholder="Password"
          required
        />
        
        {error && (
          <p className="text-sm text-red-600 bg-red-50 p-3 rounded-lg">{error}</p>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors shadow-md disabled:bg-indigo-400 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Signing In...' : 'Login'}
        </button>
      </form>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-2 text-gray-500">Or continue with</span>
        </div>
      </div>

      <div>
        <button 
          onClick={handleMicrosoftLogin}
          className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {/* Replaced FaMicrosoft with a self-contained SVG for compatibility */}
          <svg className="w-5 h-5" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
            <path d="M.5 10.5h9.5V.5H.5v10z" fill="#f65314" />
            <path d="M10.5 10.5h10V.5h-10v10z" fill="#7bba00" />
            <path d="M.5 20.5h9.5V10.5H.5v10z" fill="#00a1f1" />
            <path d="M10.5 20.5h10V10.5h-10v10z" fill="#ffb800" />
          </svg>
          Sign in with Microsoft
        </button>
      </div>
    </div>
  );
};

// Main application component
const App = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Function to check if the user is already authenticated
  const checkAuth = async () => {
    try {
      const response = await fetch('https://suma-pyrl.onrender.com/api/check-auth', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  // The onLogin function that gets passed to the LoginPage component.
  // This is where the fetch call to the backend happens.
  const handleLogin = async (username, password) => {
    const response = await fetch('https://suma-pyrl.onrender.com/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      // Throw an error if the login failed, so the component can catch it
      // and display the error message.
      throw new Error('Login failed');
    }

    const userData = await response.json();
    setUser(userData);
  };

  // Render the appropriate view based on the user's authentication status
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 font-[Inter]">
        <div className="text-lg font-semibold text-gray-700">Loading...</div>
      </div>
    );
  }

  if (user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-[Inter]">
        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-sm text-center">
          <h2 className="text-3xl font-bold mb-4 text-indigo-600">Welcome, {user.username}!</h2>
          <p className="text-gray-600 mb-6">You are now logged in to the Payroll Portal.</p>
          <div className="flex items-center justify-center mb-6">
            <img src={user.avatarUrl} alt="User Avatar" className="w-24 h-24 rounded-full border-4 border-indigo-200" />
          </div>
          <button
            onClick={() => setUser(null)} // Placeholder for a proper logout function
            className="w-full bg-red-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-700 transition-colors shadow-md"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-[Inter]">
      <LoginPage onLogin={handleLogin} />
    </div>
  );
};

export default App;
