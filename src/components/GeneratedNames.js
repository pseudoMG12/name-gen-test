import React from 'react';

const GeneratedNames = ({ names }) => {
  return (
    <div className="mt-0 mb-10 mx-12">
      <h3 className="text-2xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-green-400 to-blue-500">
        Here, are a few suggestions!
      </h3>
      <div className="mt-10 flex flex-wrap gap-2">
        {names.map((name, index) => (
          <div
            key={index}
            className="px-4 py-2 rounded-full bg-gray-800 text-center hover:shadow-lg hover:shadow-indigo-950 w-auto flex justify-center items-center"
          >
            <span className="text-md font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneratedNames;
