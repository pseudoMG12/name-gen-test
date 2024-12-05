import React, { useState } from 'react';
import { FaDollarSign, FaStar, FaShieldAlt, FaTrophy } from 'react-icons/fa';

const NameGeneratorForm = ({ onGenerateNames }) => {
  const [niche, setNiche] = useState('');
  const [competitiveAdvantage, setCompetitiveAdvantage] = useState([]);
  const [location, setLocation] = useState('');
  const [nameType, setNameType] = useState('');
  const [nameLength, setNameLength] = useState('One Word');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameType) {
      alert('Please select the type of name');
      return;
    }

    const generatedNames = [
      `${niche}${location} ${competitiveAdvantage.join(' ')} Co.`,
      `${competitiveAdvantage.join(' ')} ${niche} ${location}`,
      `${location} ${competitiveAdvantage.join(' ')} Solutions`
    ].map((name) =>
      nameType === 'Crazy'
        ? `Crazy ${name}`
        : nameType === 'Reputed'
        ? `Reputed ${name}`
        : nameType === 'Spell Twister'
        ? `SpellTwister ${name}`
        : nameType === 'Iconic'
        ? `Iconic ${name}`
        : name
    );

    const finalNames =
      nameLength === 'One Word'
        ? generatedNames.map((name) => name.replace(/\s/g, ''))
        : generatedNames;

    onGenerateNames(finalNames);
  };

  const toggleCompetitiveAdvantage = (advantage) => {
    setCompetitiveAdvantage((prev) =>
      prev.includes(advantage)
        ? prev.filter((item) => item !== advantage)
        : [...prev, advantage]
    );
  };

  const handleNameTypeSelection = (type) => {
    setNameType(type);
  };

  return (
    <div className="min-h-screen flex justify-start items-center px-6 py-12">
      <form
        onSubmit={handleSubmit}
        className="p-8 rounded-lg w-full max-w-4xl space-y-8"
      >
        {/* Heading */}
        <h3 className="text-5xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-violet-600 to-cyan-500 text-center">
          Business Name Generator
        </h3>

        {/* Sub-heading */}
        <h3 className="text-sm text-center font-normal text-transparent bg-clip-text bg-gradient-to-r from-gray-600 via-gray-200 to-gray-500">
          A project by - MG Design
        </h3>

        {/* Niche Input */}
        <div className="space-y-4">
          <label htmlFor="niche" className="text-sm font-medium text-gray-400">
            Niche - What you do?
          </label>
          <input
            type="text"
            id="niche"
            value={niche}
            onChange={(e) => setNiche(e.target.value)}
            className="w-full p-2 text-gray-300 bg-gray-800 border text-sm border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-950 shadow-md shadow-gray-850"
            placeholder="Ex. Agency, Real Estate, Saas"
            required
          />
        </div>

        {/* Competitive Advantage Buttons */}
        <div className="space-y-4">
          <label
            htmlFor="competitiveAdvantage"
            className="text-sm font-medium text-gray-400"
          >
            What makes people use your prod/service?
          </label>
          <div className="flex flex-wrap justify-center gap-2">
            {['Pricing', 'Quality', 'Features', 'Service'].map(
              (advantage, index) => {
                const icons = [
                  <FaDollarSign size={18} />,
                  <FaStar size={18} />,
                  <FaShieldAlt size={18} />,
                  <FaTrophy size={18} />
                ];
                const isSelected = competitiveAdvantage.includes(advantage);
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => toggleCompetitiveAdvantage(advantage)}
                    className={`inline-flex items-center justify-center w-60 py-2 px-6 rounded-full transition-all duration-200
                    ${isSelected
                      ? 'bg-gradient-to-r from-yellow-400 via-lime-600 to-green-500 shadow-lg shadow-lime-700'
                      : 'bg-gray-800'}
                    text-white hover:shadow-lg hover:shadow-lime-700  hover:scale-105`}
                  >
                    <span className="mr-3">{icons[index]}</span>
                    <span>{advantage}</span>
                  </button>
                );
              }
            )}
          </div>
        </div>

        {/* Location Input */}
        <div className="space-y-4 mt-10">
          <label
            htmlFor="location"
            className="text-sm font-medium text-gray-400"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 text-gray-300 bg-gray-800 border text-sm border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-950 shadow-md shadow-gray-850"
            placeholder="Enter your Country/City name"
            required
          />
        </div>

        {/* Type of Name Buttons */}
        <div className="space-y-4">
          <label
            htmlFor="nameType"
            className="text-sm font-medium text-gray-400"
          >
            Type of Name (required)
          </label>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { type: 'Crazy', emoji: '🤪' },
              { type: 'Reputed', emoji: '🏆' },
              { type: 'Spell Twister', emoji: '🔄' },
              { type: 'Iconic', emoji: '⭐' }
            ].map(({ type, emoji }) => {
              const isSelected = nameType === type;
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => handleNameTypeSelection(type)}
                  className={`inline-flex items-center justify-center w-60 text-md font-normal py-2 px-6 transition-all duration-300 ease-in-out rounded-full
                  ${isSelected
                    ? 'bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 text-white shadow-fuchsia-800 shadow-lg border-none'
                    : 'bg-gray-800 hover:shadow-lg hover:shadow-fuchsia-800  text-white hover:scale-105'}`}
                >
                  <span className="mr-3">{emoji}</span>
                  <span>{type}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Name Length Radio Buttons */}
        <div className="space-y-4 mt-10">
          <label
            htmlFor="nameLength"
            className="text-sm font-medium text-gray-400"
          >
            Name Length
          </label>
          <div className="flex gap-4">
            {['One Word', 'Two Words'].map((length) => (
              <label
                key={length}
                className="flex items-center space-x-2 text-gray-400"
              >
                <input
                  type="radio"
                  value={length}
                  checked={nameLength === length}
                  onChange={(e) => setNameLength(e.target.value)}
                  className="form-radio h-5 w-5 text-yellow-500 focus:ring-purple-500"
                />
                <span>{length}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="relative flex justify-center items-center max-h-[10vh]">
          <div className="absolute -inset-1">
            <div className="flex justify-center items-center w-auto max-w-full mx-auto lg:mx-0 opacity-30 blur-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
          </div>
          <button className="relative inline-flex mt-2 items-center justify-center overflow-hidden rounded-lg p-[1.5px] focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2 focus:ring-offset-slate-950 shadow-2xl shadow-purple-900 hover:shadow-sm transition-shadow duration-300 ease-in-out">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffff00_0%,#430070_50%,#10b981_50%,#a855f7_75%,#ffff00_100%)]" />
            <span className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg bg-black px-6 py-2 text-lg font-roboto text-white backdrop-blur-3xl transition-colors duration-300 ease-in-out hover:bg-gray-800 hover:text-gray-300">
              Generate Now!
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default NameGeneratorForm;
