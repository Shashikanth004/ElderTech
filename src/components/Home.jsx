import './Home.css'

function Home({ t, setCurrentPage }) {
  const sections = [
    {
      key: 'contacts',
      title: t.nav.contacts,
      description: 'Learn how to save contacts and make phone calls safely',
      icon: '📞',
      color: 'blue'
    },
    {
      key: 'photos',
      title: t.nav.photos,
      description: 'Discover how to take beautiful photos and videos',
      icon: '📷',
      color: 'green'
    },
    {
      key: 'payments',
      title: t.nav.payments,
      description: 'Use digital payments securely and confidently',
      icon: '💳',
      color: 'orange'
    },
    {
      key: 'videocall',
      title: t.nav.videocall,
      description: 'Connect with family through video calls',
      icon: '📹',
      color: 'purple'
    }
  ]

  return (
    <div className="home">
      <div className="hero">
        <h1>{t.home.welcome}</h1>
        <p className="hero-subtitle">{t.home.description}</p>
      </div>
      
      <div className="getting-started">
        <h2>{t.home.getStarted}</h2>
        <div className="sections-grid">
          {sections.map(section => (
            <div key={section.key} className={`section-card ${section.color}`}>
              <div className="section-icon">{section.icon}</div>
              <h3>{section.title}</h3>
              <p>{section.description}</p>
              <button 
                className="btn btn-primary btn-large"
                onClick={() => setCurrentPage(section.key)}
              >
                Start Learning
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="additional-features">
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">📥</div>
            <h3>Download Guides</h3>
            <p>Get PDF versions of all our guides to read offline</p>
            <button 
              className="btn btn-success"
              onClick={() => setCurrentPage('download')}
            >
              {t.nav.download}
            </button>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Try Demo</h3>
            <p>Experience a complete walkthrough of smartphone features</p>
            <button 
              className="btn btn-success"
              onClick={() => setCurrentPage('demo')}
            >
              {t.nav.demo}
            </button>
          </div>
        </div>
      </div>

      <div className="voice-help">
        <div className="voice-help-content">
          <div className="voice-icon">🎙️</div>
          <p>{t.home.voiceHelp}</p>
        </div>
      </div>
    </div>
  )
}

export default Home;