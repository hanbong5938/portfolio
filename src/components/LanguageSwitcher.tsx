import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import 'flag-icons/css/flag-icons.min.css';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng).then((r) => r);
    setShowDropdown(false);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="bg-white border rounded px-2 py-1 shadow-md focus:outline-none"
      >
        🌐
      </button>
      {showDropdown && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg">
          <div
            className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
            onClick={() => changeLanguage('en')}
          >
            <span className="fi fi-gb mr-2"></span>English
          </div>
          <div
            className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
            onClick={() => changeLanguage('ko')}
          >
            <span className="fi fi-kr mr-2"></span>한국어
          </div>
          {/* Add more languages here */}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
