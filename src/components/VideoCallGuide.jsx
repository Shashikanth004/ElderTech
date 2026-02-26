import { useState } from 'react'
import './GuideCommon.css'

function VideoCallGuide({ t }) {
  const [showDemo, setShowDemo] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [callState, setCallState] = useState('ready') // ready, calling, connected, ended
  const [callWith, setCallWith] = useState('')

  const steps = [
    {
      title: "Step 1: Choose a Video Calling App",
      content: "Popular apps include WhatsApp, Google Meet, Zoom, or Skype. WhatsApp is often easiest as most family members already have it.",
      tip: "WhatsApp video calls are free and work on any phone with internet connection."
    },
    {
      title: "Step 2: Find Your Contact",
      content: "Open WhatsApp and find the person you want to call in your chat list. Tap on their name to open the chat.",
      tip: "You can also use the search box at the top to quickly find someone by typing their name."
    },
    {
      title: "Step 3: Start the Video Call",
      content: "Look for the video camera icon 📹 at the top of the chat screen. Tap it to start a video call.",
      tip: "Make sure you're in a well-lit area so the other person can see you clearly."
    },
    {
      title: "Step 4: Answer Incoming Calls",
      content: "When someone calls you, you'll see their name and photo. Swipe the green phone icon to answer.",
      tip: "You can tap the camera icon to turn your video on or off during the call."
    },
    {
      title: "Step 5: During the Call",
      content: "You can mute yourself, turn camera on/off, or switch between front and back camera using the buttons on screen.",
      tip: "To end the call, tap the red phone icon. Always say goodbye before ending!"
    }
  ]

  const handleStartCall = () => {
    if (callWith) {
      setCallState('calling')
      setTimeout(() => {
        setCallState('connected')
      }, 3000)
    }
  }

  const handleEndCall = () => {
    setCallState('ended')
    setTimeout(() => {
      setCallState('ready')
      setCallWith('')
    }, 2000)
  }

  if (showDemo) {
    return (
      <div className="guide-container">
        <div className="guide-header">
          <h1>📹 Interactive Video Call Demo</h1>
          <button 
            className="btn btn-primary"
            onClick={() => setShowDemo(false)}
          >
            {t.common.backToGuide}
          </button>
        </div>

        <div className="demo-container">
          <div className="demo-phone">
            <div className="demo-screen">
              <h3>📱 Video Call App</h3>
              
              {callState === 'ready' && (
                <div className="demo-section">
                  <h4>Start Video Call</h4>
                  <div className="form-group">
                    <label className="form-label">Call to:</label>
                    <select
                      className="form-input"
                      value={callWith}
                      onChange={(e) => setCallWith(e.target.value)}
                    >
                      <option value="">Select contact</option>
                      <option value="Grandchild">👶 Grandchild</option>
                      <option value="Son/Daughter">👨‍👩‍👧‍👦 Son/Daughter</option>
                      <option value="Friend">👫 Friend</option>
                      <option value="Doctor">👨‍⚕️ Doctor</option>
                    </select>
                  </div>
                  <button 
                    className="btn btn-success btn-large"
                    onClick={handleStartCall}
                    disabled={!callWith}
                  >
                    📹 Start Video Call
                  </button>
                </div>
              )}

              {callState === 'calling' && (
                <div className="demo-section">
                  <div className="call-screen">
                    <h4>📞 Calling {callWith}...</h4>
                    <div className="calling-animation">
                      <p>📹 Waiting for them to answer...</p>
                      <div className="pulse-animation">📞</div>
                    </div>
                  </div>
                </div>
              )}

              {callState === 'connected' && (
                <div className="demo-section">
                  <div className="call-screen">
                    <h4>📹 Connected with {callWith}</h4>
                    <div className="video-area">
                      <div className="video-preview">
                        <p>📹 Your video</p>
                        <div className="video-placeholder">👤</div>
                      </div>
                      <div className="video-main">
                        <p>📹 {callWith}'s video</p>
                        <div className="video-placeholder">😊</div>
                      </div>
                    </div>
                    <div className="call-controls">
                      <button className="btn btn-primary">🔇 Mute</button>
                      <button className="btn btn-primary">📹 Camera</button>
                      <button className="btn btn-danger" onClick={handleEndCall}>📞 End Call</button>
                    </div>
                  </div>
                </div>
              )}

              {callState === 'ended' && (
                <div className="demo-section">
                  <div className="call-screen">
                    <h4>✅ Call Ended</h4>
                    <p>Thank you for calling {callWith}!</p>
                    <div className="call-summary">
                      <p>📊 Call duration: 2 minutes</p>
                      <p>📅 {new Date().toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="guide-container">
      <div className="guide-header">
        <h1>📹 Video Calls</h1>
        <p>Connect with family and friends through video calls</p>
        <button 
          className="btn btn-success btn-large"
          onClick={() => setShowDemo(true)}
        >
          {t.common.tryDemo}
        </button>
      </div>

      <div className="steps-container">
        <div className="steps">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`step ${currentStep === index + 1 ? 'active' : ''} ${currentStep > index + 1 ? 'completed' : ''}`}
            >
              Step {index + 1}
            </div>
          ))}
        </div>

        <div className="step-content">
          <div className="card">
            <div className="card-header">
              <h2>{steps[currentStep - 1].title}</h2>
            </div>
            <p className="step-description">{steps[currentStep - 1].content}</p>
            <div className="tip-box">
              <strong>💡 Helpful Tip:</strong> {steps[currentStep - 1].tip}
            </div>
          </div>

          <div className="step-navigation">
            <button
              className="btn btn-primary"
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
            >
              {t.common.previous}
            </button>
            <span className="step-counter">
              {currentStep} of {steps.length}
            </span>
            <button
              className="btn btn-primary"
              onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
              disabled={currentStep === steps.length}
            >
              {t.common.next}
            </button>
          </div>
        </div>
      </div>

      <div className="video-tips">
        <h3>📹 Video Call Tips for Better Experience</h3>
        <div className="grid grid-2">
          <div className="tip-card">
            <h4>💡 Good Lighting</h4>
            <p>Sit facing a window or lamp so your face is well-lit. Avoid sitting with bright light behind you.</p>
          </div>
          <div className="tip-card">
            <h4>📶 Strong Internet</h4>
            <p>Use WiFi when possible for clearer calls. If using mobile data, make sure you have good signal.</p>
          </div>
          <div className="tip-card">
            <h4>🤫 Quiet Environment</h4>
            <p>Find a quiet place for your call. Background noise can make it hard for others to hear you.</p>
          </div>
          <div className="tip-card">
            <h4>👁️ Eye Contact</h4>
            <p>Look at the camera (small hole near the screen) when talking, not at your own image on screen.</p>
          </div>
          <div className="tip-card">
            <h4>🔋 Charge Your Phone</h4>
            <p>Video calls use more battery. Make sure your phone is charged or plugged in during long calls.</p>
          </div>
          <div className="tip-card">
            <h4>👂 Use Headphones</h4>
            <p>Headphones can make it easier to hear and reduce echo during video calls.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCallGuide;