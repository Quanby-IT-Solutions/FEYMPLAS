// src/components/forms/LoginModal.tsx

import { useRouter } from 'next/navigation';

interface LoginModalProps {
  title: string;
  logoText: string;
  onClose: () => void;
  // Prop to differentiate the type of login
  loginType: 'Exhibitor' | 'Trade Buyer';
}

const LoginModal: React.FC<LoginModalProps> = ({ title, logoText, onClose, loginType }) => {
  const router = useRouter();

  // Function to handle registration navigation
  const handleRegisterClick = () => {
    if (loginType === 'Exhibitor') {
      router.push('/exhibitor-registration');
    } else if (loginType === 'Trade Buyer') {
      router.push('/trade-buyer-registration');
    }
    // Close modal after navigation
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      // Closes the modal when clicking outside
      onClick={onClose}
    >
      <div
        className="flex w-full max-w-4xl bg-white dark:bg-gray-800 shadow-lg transition-colors duration-300"
        // Prevent close when clicking inside the modal
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Side - Logo */}
        <div className="flex items-center justify-center w-2/5 bg-[#1f1a15] p-8">
          <h1 className="text-white text-6xl font-bold">{logoText}</h1>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-3/5 p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{title}</h2>
          <form className="space-y-6">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            <div className="flex justify-end">
              <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-[#656445] text-white py-2 rounded font-bold transition-colors duration-300"
            >
              LOGIN
            </button>
          </form>
          {/* Registration Link */}
          <div className="mt-4 text-center text-sm">
            Don&#39;t have an account?{' '}
            <a href="#" className="text-[#656445] dark:text-[#a0a37a] hover:underline" onClick={handleRegisterClick}>
              Register Here.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
