import React from 'react';
import EmailVerification from './EmailVerification';  // Import EmailVerification component

const HomePage = ({ onVerify }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-8 px-4">
      <div className="max-w-3xl w-full p-6">
       
       

        <h1 className="text-5xl text-center font-light text-gray-300 mt-16 mb-6 font-sans">
  Free{' '}
  <span className="font-normal bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500">
    AI
  </span>{''}
  -{''}
  <span className="font-normal bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-indigo-500 to-pink-500">
    Powered
  </span>{' '}
  name generator for your{' '}
  <span className="relative inline-block">
    
    <span className="text-white font-normal">Business</span>
  </span>
  .
</h1>



        {/* Short Story with Fire Emoji */}
        <p className="text-center text-sm text-gray-500 mt-6 mb-8">
          Generated more than <span className="text-white font-normal">1.2k times</span> last month🔥
        </p>

        {/* Email Verification Form */}
        <EmailVerification onVerify={onVerify} />


        {/* Footer - Creator Info */}
        <footer className="mt-12 text-center text-gray-500">
          <p>Creator - MG Design</p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
