import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ContactsGuide from './components/ContactsGuide'
import PhotosGuide from './components/PhotosGuide'
import PaymentsGuide from './components/PaymentsGuide'
import VideoCallGuide from './components/VideoCallGuide'
import VoiceAssistant from './components/VoiceAssistant'
import LanguageSelector from './components/LanguageSelector'
import DownloadGuide from './components/DownloadGuide'
import DemoWalkthrough from './components/DemoWalkthrough'
import translations from './translations'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [language, setLanguage] = useState('english')

  const t = translations[language]

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home t={t} setCurrentPage={setCurrentPage} />
      case 'contacts':
        return <ContactsGuide t={t} />
      case 'photos':
        return <PhotosGuide t={t} />
      case 'payments':
        return <PaymentsGuide t={t} />
      case 'videocall':
        return <VideoCallGuide t={t} />
      case 'download':
        return <DownloadGuide t={t} />
      case 'demo':
        return <DemoWalkthrough t={t} setCurrentPage={setCurrentPage} />
      default:
        return <Home t={t} setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div className="app">
      <LanguageSelector language={language} setLanguage={setLanguage} />
      <Navbar t={t} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <VoiceAssistant t={t} setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default App;