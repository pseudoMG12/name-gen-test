import React, { useState } from 'react';

const EmailVerification = ({ onVerify }) => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState('');

  // Regular expression for email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    // Validate email using the regex
    if (!emailRegex.test(inputEmail)) {
      setError('Invalid email format');
      setIsValid(false);
    } else {
      setError('');
      setIsValid(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid && email) {
      onVerify(); // Trigger parent verification logic
    } else {
      setIsValid(false); // Ensure error display
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-12 mb-20">
      <h2 className="text-2xl text-center font-semibold text-gray-700"> </h2>
<input
  type="email"
  value={email}
  onChange={handleEmailChange}
  className={`w-full p-2 border bg-gray-800 rounded-full text-center text-white ${isValid ? 'border-gray-500' : 'border-red-500'}`}
  placeholder="Drop your email and generate unique names."
  required
/>
{/* Display validation error */}
{error && <p className="text-red-500 text-center text-sm">{error}</p>}
<div className="flex items-center justify-center">


        <button
          className="relative inline-flex mt-2 items-center justify-center overflow-hidden rounded-lg border border-none p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2 focus:ring-offset-slate-950 shadow-2xl shadow-violet-900 hover:shadow-xl transition-shadow duration-300 ease-in-out"
          type="submit"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#2A0134_20%,#a855f7_50%,#ff00ff_50%,#a855f7_75%,#ffff05_100%)]" />
          <span className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg bg-black px-6 py-2 text-md font-roboto text-white backdrop-blur-3xl transition-colors ease-in-out hover:bg-gray-950 duration-300 hover:text-white">
            Generate for Free!
          </span>
        </button>
      </div>
    </form>
  );
};

export default EmailVerification;
