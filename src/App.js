import React, { useState } from 'react';
import EmailVerification from './components/EmailVerification';
import NameGeneratorForm from './components/NameGeneratorForm';
import GeneratedNames from './components/GeneratedNames';
import HomePage from './components/HomePage'; // Import the HomePage component

const App = () => {
  const [emailVerified, setEmailVerified] = useState(false);
  const [names, setNames] = useState([]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-950 via-purple-950 to-gray-950 flex flex-col justify-center items-center py-8 px-4">
  <div className="max-w-3xl w-full bg-gray-900 p-6 rounded-lg shadow-md">
    {/* Conditionally render HomePage or Name Generator Form */}
    {!emailVerified ? (
      <HomePage onVerify={() => setEmailVerified(true)} />
    ) : (
      <>
        <NameGeneratorForm onGenerateNames={setNames} />
        {names.length > 0 && <GeneratedNames names={names} />}
      </>
    )}
  </div>
</div>

  );
};

export default App;
