import { useState } from 'react'
import './GuideCommon.css'

function PaymentsGuide({ t }) {
  const [showDemo, setShowDemo] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [demoData, setDemoData] = useState({
    amount: '',
    recipient: '',
    pin: '',
    transactions: []
  })

  const steps = [
    {
      title: "Step 1: Choose a Payment App",
      content: "Look for trusted apps like Google Pay, PhonePe, or Paytm on your phone. These have colorful icons and are usually pre-installed.",
      tip: "Only download payment apps from official app stores. Never click on payment links from unknown sources."
    },
    {
      title: "Step 2: Set Up Your Account",
      content: "Open the app and follow the setup process. You'll need to link your bank account or add money to your wallet.",
      tip: "Use only your own bank account and phone number. Never share your login details with anyone."
    },
    {
      title: "Step 3: Create a Strong PIN",
      content: "Set up a 4-6 digit PIN that you can remember but others can't guess. Avoid birthdates or simple patterns like 1234.",
      tip: "Write down your PIN in a safe place at home, but never store it on your phone."
    },
    {
      title: "Step 4: Making a Payment",
      content: "Enter the recipient's phone number or scan their QR code, enter the amount, and confirm with your PIN.",
      tip: "Always double-check the amount and recipient before confirming. Once sent, digital payments are hard to reverse."
    },
    {
      title: "Step 5: Check Your Transaction",
      content: "After payment, you'll see a confirmation message. Take a screenshot or note down the transaction ID for your records.",
      tip: "Keep your phone's transaction history private. Log out of payment apps when not using them."
    }
  ]

  const handleDemoPayment = () => {
    if (demoData.amount && demoData.recipient && demoData.pin === '1234') {
      const newTransaction = {
        id: Date.now(),
        amount: demoData.amount,
        recipient: demoData.recipient,
        timestamp: new Date().toLocaleTimeString(),
        status: 'Success'
      }
      setDemoData({
        ...demoData,
        transactions: [...demoData.transactions, newTransaction],
        amount: '',
        recipient: '',
        pin: ''
      })
      alert('Payment successful! 💰✅')
    } else if (demoData.pin !== '1234') {
      alert('Incorrect PIN. Please try again. 🔒')
    } else {
      alert('Please fill in all fields')
    }
  }

  if (showDemo) {
    return (
      <div className="guide-container">
        <div className="guide-header">
          <h1>💳 Interactive Payments Demo</h1>
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
              <h3>📱 Payment App</h3>
              
              <div className="demo-section">
                <h4>Send Money</h4>
                <div className="form-group">
                  <label className="form-label">Recipient Phone:</label>
                  <input
                    type="tel"
                    className="form-input"
                    value={demoData.recipient}
                    onChange={(e) => setDemoData({...demoData, recipient: e.target.value})}
                    placeholder="Enter phone number"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Amount (₹):</label>
                  <input
                    type="number"
                    className="form-input"
                    value={demoData.amount}
                    onChange={(e) => setDemoData({...demoData, amount: e.target.value})}
                    placeholder="Enter amount"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">PIN (Demo: 1234):</label>
                  <input
                    type="password"
                    className="form-input"
                    value={demoData.pin}
                    onChange={(e) => setDemoData({...demoData, pin: e.target.value})}
                    placeholder="Enter PIN"
                    maxLength="4"
                  />
                </div>
                <button 
                  className="btn btn-success btn-large"
                  onClick={handleDemoPayment}
                  disabled={!demoData.amount || !demoData.recipient || !demoData.pin}
                >
                  💰 Send Payment
                </button>
              </div>

              {demoData.transactions.length > 0 && (
                <div className="demo-section">
                  <h4>Transaction History</h4>
                  {demoData.transactions.map((transaction) => (
                    <div key={transaction.id} className="payment-item">
                      <div className="payment-info">
                        <strong>₹{transaction.amount}</strong> to {transaction.recipient}
                        <br />
                        <small>{transaction.timestamp} - {transaction.status}</small>
                      </div>
                      <div className="payment-status">✅</div>
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
        <h1>💳 Digital Payments</h1>
        <p>Learn how to use digital payments safely and securely</p>
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

      <div className="payment-safety">
        <h3>🛡️ Digital Payment Safety Rules</h3>
        <div className="grid grid-2">
          <div className="tip-card">
            <h4>🔒 Secure PIN</h4>
            <p>Never share your PIN with anyone. Banks will never ask for your PIN over phone or email.</p>
          </div>
          <div className="tip-card">
            <h4>✅ Verify Before Paying</h4>
            <p>Always double-check the recipient's number and amount before confirming any payment.</p>
          </div>
          <div className="tip-card">
            <h4>📱 Official Apps Only</h4>
            <p>Download payment apps only from Google Play Store or Apple App Store. Avoid unknown sources.</p>
          </div>
          <div className="tip-card">
            <h4>🚫 Avoid Public WiFi</h4>
            <p>Never make payments using public WiFi. Use your mobile data or trusted home network.</p>
          </div>
          <div className="tip-card">
            <h4>📧 Beware of Fake Messages</h4>
            <p>Ignore messages asking you to click links or share OTP. Banks don't ask for details this way.</p>
          </div>
          <div className="tip-card">
            <h4>💰 Start Small</h4>
            <p>When trying digital payments for the first time, start with small amounts to build confidence.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentsGuide;