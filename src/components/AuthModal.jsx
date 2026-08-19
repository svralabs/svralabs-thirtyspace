import { useState, useEffect, useRef } from 'react';

const AuthModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email required';
    if (!password) newErrors.password = 'Password required';
    if (activeTab === 'register' && password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords must match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', { email, password });
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="relative bg-white p-8 rounded-lg shadow-lg border-4 border-black w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between mb-6">
          <button
            className={`px-4 py-2 ${activeTab === 'login' ? 'bg-black text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'register' ? 'bg-black text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('register')}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className={`w-full p-2 border-2 ${errors.email ? 'border-red-500' : 'border-black'}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className={`w-full p-2 border-2 ${errors.password ? 'border-red-500' : 'border-black'}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          {activeTab === 'register' && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <input
                type="password"
                className={`w-full p-2 border-2 ${errors.confirmPassword ? 'border-red-500' : 'border-black'}`}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
              )}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 mb-4 border-2 border-black hover:bg-white hover:text-black transition-colors"
          >
            {activeTab === 'login' ? 'Login' : 'Register'}
          </button>

          <div className="flex items-center mb-4">
            <div className="flex-grow border-t-2 border-black"></div>
            <span className="mx-2 text-sm text-gray-500">OR</span>
            <div className="flex-grow border-t-2 border-black"></div>
          </div>

          <div className="flex justify-center space-x-4">
            <button className="bg-black text-white py-2 px-4 border-2 border-black hover:bg-white hover:text-black transition-colors">
              Google
            </button>
            <button className="bg-black text-white py-2 px-4 border-2 border-black hover:bg-white hover:text-black transition-colors">
              Facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
