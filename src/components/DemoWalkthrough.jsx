import { useState } from 'react'
import './DemoWalkthrough.css'

function DemoWalkthrough({ t, setCurrentPage }) {
  const [currentDemo, setCurrentDemo] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const demos = [
    {
      id: 'welcome',
      title: '👋 Welcome to eBuddy Demo',
      description: 'Experience a complete walkthrough of smartphone features designed for seniors',
      content: (
        <div className="demo-welcome">
          <div className="welcome-icon">🎯</div>
          <h2>Interactive Demo Experience</h2>
          <p>This demo will show you exactly how to use your smartphone safely and confidently.</p>
          <div className="demo-features">
            <div className="feature-item">📞 Make calls and save contacts</div>
            <div className="feature-item">📷 Take beautiful photos</div>
            <div className="feature-item">💳 Use digital payments safely</div>
            <div className="feature-item">📹 Connect through video calls</div>
          </div>
          <p><strong>Click "Start Demo" to begin your learning journey!</strong></p>
        </div>
      )
    },
    {
      id: 'phone-basics',
      title: '📱 Phone Basics',
      description: 'Learn the essential parts of your smartphone',
      content: (
        <div className="demo-phone-basics">
          <div className="phone-diagram">
            <div className="phone-outline">
              <div className="phone-screen">
                <div className="screen-element top-bar">📶 ••• 🔋</div>
                <div className="screen-element home-icons">
                  <div className="app-icon">📞</div>
                  <div className="app-icon">📷</div>
                  <div className="app-icon">💬</div>
                  <div className="app-icon">⚙️</div>
                </div>
                <div className="screen-element bottom-bar">⚪</div>
              </div>
            </div>
          </div>
          <div className="phone-labels">
            <div className="label-item">📶 Signal strength - shows your connection</div>
            <div className="label-item">🔋 Battery level - keep it charged!</div>
            <div className="label-item">📞 Phone app - make calls here</div>
            <div className="label-item">📷 Camera app - take photos</div>
            <div className="label-item">⚪ Home button - returns to main screen</div>
          </div>
        </div>
      )
    },
    {
      id: 'contacts-demo',
      title: '📞 Contacts Demo',
      description: 'Watch how to save a contact and make a call',
      content: (
        <div className="demo-contacts">
          <div className="demo-steps">
            <div className="step-demo active">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Open Contacts App</h4>
                <div className="phone-simulation">
                  <div className="sim-screen">
                    <div className="sim-icon highlight">📞</div>
                    <p>Tap the phone icon</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-demo">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Add New Contact</h4>
                <div className="phone-simulation">
                  <div className="sim-screen">
                    <div className="sim-button highlight">+ Add Contact</div>
                    <p>Tap the + button</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-demo">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Enter Information</h4>
                <div className="phone-simulation">
                  <div className="sim-form">
                    <input type="text" placeholder="Name: John Smith" disabled />
                    <input type="tel" placeholder="Phone: 555-0123" disabled />
                    <button className="sim-save highlight">Save Contact</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'photos-demo',
      title: '📷 Photography Demo',
      description: 'Learn to take great photos step by step',
      content: (
        <div className="demo-photos">
          <div className="camera-demo">
            <div className="camera-interface">
              <div className="camera-viewfinder">
                <div className="viewfinder-overlay">
                  <div className="focus-square"></div>
                  <p>🌸 Point at your subject</p>
                </div>
              </div>
              <div className="camera-controls-demo">
                <button className="camera-btn-demo">🔄</button>
                <button className="camera-btn-demo main-btn">📸</button>
                <button className="camera-btn-demo">⚡</button>
              </div>
            </div>
            <div className="photo-tips-demo">
              <h4>📸 Quick Tips:</h4>
              <ul>
                <li>Hold phone steady with both hands</li>
                <li>Make sure subject is well-lit</li>
                <li>Tap the white circle to take photo</li>
                <li>Photos are automatically saved</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'payments-demo',
      title: '💳 Safe Payments Demo',
      description: 'Experience secure digital payment process',
      content: (
        <div className="demo-payments">
          <div className="payment-interface">
            <h4>🔒 Secure Payment App</h4>
            <div className="payment-form-demo">
              <div className="form-field">
                <label>Send to:</label>
                <div className="input-demo">👨‍👩‍👧‍👦 Family Member</div>
              </div>
              <div className="form-field">
                <label>Amount:</label>
                <div className="input-demo">₹ 500</div>
              </div>
              <div className="form-field">
                <label>PIN:</label>
                <div className="input-demo">**** (Never share!)</div>
              </div>
              <button className="payment-btn-demo">💰 Send Safely</button>
            </div>
            <div className="payment-safety">
              <h5>🛡️ Safety Reminders:</h5>
              <ul>
                <li>✅ Always verify recipient</li>
                <li>✅ Double-check amount</li>
                <li>✅ Never share your PIN</li>
                <li>✅ Use trusted apps only</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'video-calls-demo',
      title: '📹 Video Calls Demo',
      description: 'Connect with family through video calling',
      content: (
        <div className="demo-video">
          <div className="video-interface">
            <div className="video-call-sim">
              <div className="video-preview">
                <div className="video-placeholder">👤 You</div>
              </div>
              <div className="video-main">
                <div className="video-placeholder main">😊 Grandchild</div>
              </div>
              <div className="call-controls-demo">
                <button className="call-btn">🔇</button>
                <button className="call-btn">📹</button>
                <button className="call-btn end-call">📞</button>
              </div>
            </div>
            <div className="video-tips">
              <h5>💡 Video Call Tips:</h5>
              <ul>
                <li>Sit near good lighting</li>
                <li>Hold phone steady</li>
                <li>Look at camera when talking</li>
                <li>Use WiFi for best quality</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'congratulations',
      title: '🎉 Congratulations!',
      description: 'You\'ve completed the eBuddy demo experience',
      content: (
        <div className="demo-completion">
          <div className="completion-celebration">
            <div className="celebration-icon">🎉</div>
            <h2>Demo Complete!</h2>
            <p>You've successfully learned the basics of smartphone technology!</p>
          </div>
          <div className="completion-summary">
            <h3>What you've learned:</h3>
            <div className="learned-items">
              <div className="learned-item">✅ Phone basics and navigation</div>
              <div className="learned-item">✅ Adding contacts and making calls</div>
              <div className="learned-item">✅ Taking photos like a pro</div>
              <div className="learned-item">✅ Safe digital payments</div>
              <div className="learned-item">✅ Video calling with family</div>
            </div>
          </div>
          <div className="next-steps">
            <h3>Ready for more learning?</h3>
            <div className="next-actions">
              <button 
                className="btn btn-primary btn-large"
                onClick={() => setCurrentPage('contacts')}
              >
                📞 Practice Contacts
              </button>
              <button 
                className="btn btn-primary btn-large"
                onClick={() => setCurrentPage('photos')}
              >
                📷 Try Photography
              </button>
              <button 
                className="btn btn-success btn-large"
                onClick={() => setCurrentPage('download')}
              >
                📥 Download Guides
              </button>
            </div>
          </div>
        </div>
      )
    }
  ]

  const nextDemo = () => {
    if (currentDemo < demos.length - 1) {
      setCurrentDemo(currentDemo + 1)
    }
  }

  const prevDemo = () => {
    if (currentDemo > 0) {
      setCurrentDemo(currentDemo - 1)
    }
  }

  const startAutoPlay = () => {
    setIsPlaying(true)
    const interval = setInterval(() => {
      setCurrentDemo(prev => {
        if (prev >= demos.length - 1) {
          setIsPlaying(false)
          clearInterval(interval)
          return prev
        }
        return prev + 1
      })
    }, 5000)
  }

  return (
    <div className="demo-walkthrough">
      <div className="demo-header">
        <h1>🎯 Interactive Demo Walkthrough</h1>
        <p>Experience smartphone learning designed specifically for seniors</p>
        <div className="demo-controls">
          <button 
            className="btn btn-success btn-large"
            onClick={startAutoPlay}
            disabled={isPlaying}
          >
            {isPlaying ? '⏸️ Playing...' : '▶️ Auto Play Demo'}
          </button>
        </div>
      </div>

      <div className="demo-progress">
        <div className="progress-bar">
          {demos.map((_, index) => (
            <div
              key={index}
              className={`progress-dot ${index <= currentDemo ? 'completed' : ''} ${index === currentDemo ? 'active' : ''}`}
              onClick={() => setCurrentDemo(index)}
            />
          ))}
        </div>
        <div className="progress-text">
          Step {currentDemo + 1} of {demos.length}
        </div>
      </div>

      <div className="demo-content">
        <div className="demo-card">
          <div className="demo-card-header">
            <h2>{demos[currentDemo].title}</h2>
            <p>{demos[currentDemo].description}</p>
          </div>
          <div className="demo-card-body">
            {demos[currentDemo].content}
          </div>
        </div>
      </div>

      <div className="demo-navigation">
        <button
          className="btn btn-primary btn-large"
          onClick={prevDemo}
          disabled={currentDemo === 0}
        >
          ⬅️ Previous
        </button>
        
        <div className="demo-info">
          <span className="demo-title">{demos[currentDemo].title}</span>
        </div>
        
        <button
          className="btn btn-primary btn-large"
          onClick={nextDemo}
          disabled={currentDemo === demos.length - 1}
        >
          Next ➡️
        </button>
      </div>

      {currentDemo === demos.length - 1 && (
        <div className="demo-footer">
          <h3>🌟 Continue Your Learning Journey</h3>
          <p>Ready to practice what you've learned? Try our interactive guides!</p>
          <div className="footer-actions">
            <button 
              className="btn btn-success btn-large"
              onClick={() => setCurrentPage('home')}
            >
              🏠 Back to Home
            </button>
            <button 
              className="btn btn-primary btn-large"
              onClick={() => setCurrentDemo(0)}
            >
              🔄 Restart Demo
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default DemoWalkthrough;