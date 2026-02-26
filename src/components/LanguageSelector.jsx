import { useState } from 'react'
import './LanguageSelector.css'

function LanguageSelector({ language, setLanguage }) {
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'english', name: 'English', flag: '🇬🇧', nativeName: 'English' },
    { code: 'hindi', name: 'Hindi', flag: '🇮🇳', nativeName: 'हिन्दी' },
    { code: 'tamil', name: 'Tamil', flag: '🇮🇳', nativeName: 'தமிழ்' },
    { code: 'bengali', name: 'Bengali', flag: '🇮🇳', nativeName: 'বাংলা' }
  ]

  const currentLanguage = languages.find(lang => lang.code === language)

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode)
    setIsOpen(false)
  }

  return (
    <div className="language-selector">
      <div className="language-selector-header">
        <h3>🌐 Choose Language</h3>
      </div>
      
      <div className="language-dropdown">
        <button 
          className="language-current"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Select language"
        >
          <span className="language-flag">{currentLanguage.flag}</span>
          <span className="language-name">{currentLanguage.nativeName}</span>
          <span className="dropdown-arrow">{isOpen ? '▲' : '▼'}</span>
        </button>

        {isOpen && (
          <div className="language-options">
            {languages.map(lang => (
              <button
                key={lang.code}
                className={`language-option ${language === lang.code ? 'active' : ''}`}
                onClick={() => handleLanguageChange(lang.code)}
              >
                <span className="language-flag">{lang.flag}</span>
                <span className="language-name">{lang.nativeName}</span>
                <span className="language-english">({lang.name})</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="language-info">
        <p>🗣️ Website available in multiple languages for your convenience</p>
      </div>
    </div>
  )
}

export default LanguageSelector;