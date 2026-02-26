import { useState } from 'react'
import './GuideCommon.css'

function ContactsGuide({ t }) {
  const [showDemo, setShowDemo] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [demoData, setDemoData] = useState({
    name: '',
    phone: '',
    savedContacts: []
  })

  const steps = [
    {
      title: "Step 1: Open Contacts App",
      content: "Look for the 📞 or 'Contacts' icon on your phone's home screen. It might also be called 'Phone' app.",
      tip: "If you can't find it, swipe down from the top of your screen and type 'Contacts' in the search box."
    },
    {
      title: "Step 2: Add New Contact",
      content: "Look for a '+' symbol or 'Add' button, usually at the bottom or top of the screen. Tap on it.",
      tip: "The '+' button is usually quite large and easy to see."
    },
    {
      title: "Step 3: Enter Contact Information",
      content: "Type the person's name in the 'Name' field, then type their phone number in the 'Phone' field.",
      tip: "Take your time typing. You can always go back and edit if you make a mistake."
    },
    {
      title: "Step 4: Save the Contact",
      content: "Look for a 'Save' button, usually at the top right corner. Tap it to save your new contact.",
      tip: "Your contact is now saved! You can find them in your contacts list anytime."
    },
    {
      title: "Step 5: Making a Call",
      content: "To call someone, open your contacts, find their name, and tap on their phone number or the phone icon next to their name.",
      tip: "You can also dial numbers directly using the keypad in your phone app."
    }
  ]

  const handleDemoSave = () => {
    if (demoData.name && demoData.phone) {
      setDemoData({
        ...demoData,
        savedContacts: [...demoData.savedContacts, { name: demoData.name, phone: demoData.phone }],
        name: '',
        phone: ''
      })
      alert('Contact saved successfully! 🎉')
    }
  }

  const handleDemoCall = (contact) => {
    alert(`Calling ${contact.name} at ${contact.phone}... 📞`)
  }

  if (showDemo) {
    return (
      <div className="guide-container">
        <div className="guide-header">
          <h1>📞 Interactive Contacts Demo</h1>
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
              <h3>📱 Contacts App</h3>
              
              <div className="demo-section">
                <h4>Add New Contact</h4>
                <div className="form-group">
                  <label className="form-label">Name:</label>
                  <input
                    type="text"
                    className="form-input"
                    value={demoData.name}
                    onChange={(e) => setDemoData({...demoData, name: e.target.value})}
                    placeholder="Enter contact name"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number:</label>
                  <input
                    type="tel"
                    className="form-input"
                    value={demoData.phone}
                    onChange={(e) => setDemoData({...demoData, phone: e.target.value})}
                    placeholder="Enter phone number"
                  />
                </div>
                <button 
                  className="btn btn-success btn-large"
                  onClick={handleDemoSave}
                  disabled={!demoData.name || !demoData.phone}
                >
                  💾 Save Contact
                </button>
              </div>

              {demoData.savedContacts.length > 0 && (
                <div className="demo-section">
                  <h4>Your Contacts</h4>
                  {demoData.savedContacts.map((contact, index) => (
                    <div key={index} className="contact-item">
                      <div className="contact-info">
                        <strong>{contact.name}</strong>
                        <br />
                        <span>{contact.phone}</span>
                      </div>
                      <button 
                        className="btn btn-primary"
                        onClick={() => handleDemoCall(contact)}
                      >
                        📞 Call
                      </button>
                    </div>
                  ))}
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
        <h1>📞 Contacts & Phone Calls</h1>
        <p>Learn how to save contacts and make calls safely on your smartphone</p>
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

      <div className="safety-tips">
        <h3>🛡️ Safety Tips for Phone Calls</h3>
        <ul className="safety-list">
          <li>Never give personal information like passwords or bank details over the phone</li>
          <li>Be careful of calls from unknown numbers asking for money</li>
          <li>If someone claims to be from your bank, hang up and call your bank directly</li>
          <li>Trust your instincts - if something sounds too good to be true, it probably is</li>
        </ul>
      </div>
    </div>
  )
}

export default ContactsGuide;