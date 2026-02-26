import './Navbar.css'

function Navbar({ t, currentPage, setCurrentPage }) {
  const navItems = [
    { key: 'home', label: t.nav.home, icon: '🏠' },
    { key: 'contacts', label: t.nav.contacts, icon: '📞' },
    { key: 'photos', label: t.nav.photos, icon: '📷' },
    { key: 'payments', label: t.nav.payments, icon: '💳' },
    { key: 'videocall', label: t.nav.videocall, icon: '📹' },
    { key: 'download', label: t.nav.download, icon: '📥' },
    { key: 'demo', label: t.nav.demo, icon: '🎯' }
  ]

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>{t.title}</h2>
      </div>
      <div className="navbar-menu">
        {navItems.map(item => (
          <button
            key={item.key}
            className={`navbar-item ${currentPage === item.key ? 'active' : ''}`}
            onClick={() => setCurrentPage(item.key)}
            aria-label={item.label}
          >
            <span className="navbar-icon">{item.icon}</span>
            <span className="navbar-text">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Navbar;