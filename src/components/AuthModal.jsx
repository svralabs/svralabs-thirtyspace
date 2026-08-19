import { useState, useEffect, useRef } from 'react';

const AuthModal = ({ open, onClose }) => {
  const [activeTab, setActiveTab] = useState('login');
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (open) {
      document.addEventListener('keydown', handleKeyDown);
      modalRef.current?.focus();
    }

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(activeTab === 'login' ? loginForm : registerForm);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
    >
      <div
        ref={modalRef}
        className="bg-white p-8 rounded-lg shadow-2xl border-4 border-black w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
        tabIndex="-1"
      >
        <h2 id="auth-modal-title" className="text-2xl font-bold mb-6 text-center">
          {activeTab === 'login' ? 'Login' : 'Register'}
        </h2>

        <div className="flex mb-6">
          <button
            className={`flex-1 py-2 px-4 ${activeTab === 'login' ? 'bg-black text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            className={`flex-1 py-2 px-4 ${activeTab === 'register' ? 'bg-black text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('register')}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {activeTab === 'login' ? (
            <>
              <div className="mb-4">
                <label htmlFor="login-email" className="block mb-2">Email</label>
                <input
                  id="login-email"
                  type="email"
                  className="w-full p-2 border-2 border-black shadow-md"
                  value={loginForm.email}
                  onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="login-password" className="block mb-2">Password</label>
                <input
                  id="login-password"
                  type="password"
                  className="w-full p-2 border-2 border-black shadow-md"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                  required
                />
              </div>
            </>
          ) : (
            <>
              <div className="mb-4">
                <label htmlFor="register-name" className="block mb-2">Name</label>
                <input
                  id="register-name"
                  type="text"
                  className="w-full p-2 border-2 border-black shadow-md"
                  value={registerForm.name}
                  onChange={(e) => setRegisterForm({...registerForm, name: e.target.value})}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="register-email" className="block mb-2">Email</label>
                <input
                  id="register-email"
                  type="email"
                  className="w-full p-2 border-2 border-black shadow-md"
                  value={registerForm.email}
                  onChange={(e) => setRegisterForm({...registerForm, email: e.target.value})}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="register-password" className="block mb-2">Password</label>
                <input
                  id="register-password"
                  type="password"
                  className="w-full p-2 border-2 border-black shadow-md"
                  value={registerForm.password}
                  onChange={(e) => setRegisterForm({...registerForm, password: e.target.value})}
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="register-confirm" className="block mb-2">Confirm Password</label>
                <input
                  id="register-confirm"
                  type="password"
                  className="w-full p-2 border-2 border-black shadow-md"
                  value={registerForm.confirmPassword}
                  onChange={(e) => setRegisterForm({...registerForm, confirmPassword: e.target.value})}
                  required
                />
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
          >
            {activeTab === 'login' ? 'Login' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
