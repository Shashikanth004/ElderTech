import { useState } from 'react'
import './GuideCommon.css'

function PhotosGuide({ t }) {
  const [showDemo, setShowDemo] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [demoPhotos, setDemoPhotos] = useState([])

  const steps = [
    {
      title: "Step 1: Find the Camera App",
      content: "Look for the camera icon 📷 on your home screen. It's usually a circle or square with a camera symbol inside.",
      tip: "You can also swipe down and search for 'Camera' if you can't find the icon."
    },
    {
      title: "Step 2: Open Camera App",
      content: "Tap on the camera icon to open the app. You'll see what your camera sees on the screen.",
      tip: "Make sure to allow camera permissions when prompted - this lets the app use your camera."
    },
    {
      title: "Step 3: Frame Your Photo",
      content: "Point your phone at what you want to photograph. You'll see it on your screen. Move the phone to get the best view.",
      tip: "Hold your phone steady with both hands for clearer photos."
    },
    {
      title: "Step 4: Take the Photo",
      content: "Look for a large circle button at the bottom of the screen (usually white). Tap it gently to take your photo.",
      tip: "You'll hear a camera sound and see a flash on screen when the photo is taken."
    },
    {
      title: "Step 5: View Your Photos",
      content: "Look for a small square in the corner showing your last photo, or find the 'Gallery' or 'Photos' app on your phone.",
      tip: "All your photos are automatically saved and can be viewed anytime in your photo gallery."
    }
  ]

  const samplePhotos = [
    { id: 1, name: "Family Dinner", icon: "🍽️" },
    { id: 2, name: "Garden Flowers", icon: "🌹" },
    { id: 3, name: "Grandchildren", icon: "👶" },
    { id: 4, name: "Sunset View", icon: "🌅" }
  ]

  const handleTakePhoto = () => {
    const newPhoto = {
      id: Date.now(),
      name: `Photo ${demoPhotos.length + 1}`,
      icon: "📸",
      timestamp: new Date().toLocaleTimeString()
    }
    setDemoPhotos([...demoPhotos, newPhoto])
    alert('Photo taken! 📸✨')
  }

  if (showDemo) {
    return (
      <div className="guide-container">
        <div className="guide-header">
          <h1>📷 Interactive Camera Demo</h1>
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
              <h3>📱 Camera App</h3>
              
              <div className="camera-viewfinder">
                <div className="viewfinder-content">
                  <p>📷 Camera Viewfinder</p>
                  <p>Point your phone at what you want to photograph</p>
                </div>
              </div>

              <div className="camera-controls">
                <button 
                  className="btn btn-success btn-large camera-button"
                  onClick={handleTakePhoto}
                >
                  📸 Take Photo
                </button>
              </div>

              {demoPhotos.length > 0 && (
                <div className="demo-section">
                  <h4>📱 Your Photos</h4>
                  <div className="photo-grid">
                    {demoPhotos.map((photo) => (
                      <div key={photo.id} className="photo-item">
                        <div className="photo-icon">{photo.icon}</div>
                        <div className="photo-info">
                          <strong>{photo.name}</strong>
                          <br />
                          <small>{photo.timestamp}</small>
                        </div>
                      </div>
                    ))}
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
        <h1>📷 Taking Photos</h1>
        <p>Learn how to capture beautiful memories with your smartphone camera</p>
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

      <div className="photo-tips">
        <h3>📸 Photography Tips for Better Photos</h3>
        <div className="grid grid-2">
          <div className="tip-card">
            <h4>🌞 Good Lighting</h4>
            <p>Take photos near windows or outdoors during the day for the best light. Avoid very dark places.</p>
          </div>
          <div className="tip-card">
            <h4>🤲 Hold Steady</h4>
            <p>Use both hands to hold your phone steady. Take a deep breath and gently tap the photo button.</p>
          </div>
          <div className="tip-card">
            <h4>👀 Get Closer</h4>
            <p>Move closer to your subject instead of using zoom. This makes photos clearer and more detailed.</p>
          </div>
          <div className="tip-card">
            <h4>🧹 Clean Your Lens</h4>
            <p>Gently wipe your camera lens with a soft cloth to remove fingerprints and dust.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhotosGuide;