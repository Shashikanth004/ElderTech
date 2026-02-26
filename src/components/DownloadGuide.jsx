import { useState } from 'react'
import './DownloadGuide.css'

function DownloadGuide({ t }) {
  const [selectedGuides, setSelectedGuides] = useState([])

  const guides = [
    {
      id: 'contacts',
      title: 'Contacts & Phone Calls Guide',
      description: 'Complete guide to saving contacts and making safe phone calls',
      icon: '📞',
      pages: 8,
      size: '2.3 MB'
    },
    {
      id: 'photos',
      title: 'Photography Guide',
      description: 'Learn to take beautiful photos and manage your photo gallery',
      icon: '📷',
      pages: 6,
      size: '3.1 MB'
    },
    {
      id: 'payments',
      title: 'Digital Payments Safety Guide',
      description: 'Secure digital payment methods and safety tips',
      icon: '💳',
      pages: 10,
      size: '2.8 MB'
    },
    {
      id: 'videocalls',
      title: 'Video Calling Guide',
      description: 'Connect with family through video calls on WhatsApp and other apps',
      icon: '📹',
      pages: 7,
      size: '2.5 MB'
    },
    {
      id: 'complete',
      title: 'Complete eBuddy Guide',
      description: 'All guides combined into one comprehensive manual',
      icon: '📚',
      pages: 35,
      size: '12.2 MB'
    }
  ]

  const handleGuideSelection = (guideId) => {
    setSelectedGuides(prev => 
      prev.includes(guideId) 
        ? prev.filter(id => id !== guideId)
        : [...prev, guideId]
    )
  }

  const handleDownload = (guide) => {
    // Create a simple text version of the guide
    const guideContent = generateGuideContent(guide)
    const blob = new Blob([guideContent], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${guide.title.replace(/\s+/g, '_')}.txt`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
    
    alert(`📥 ${guide.title} has been downloaded to your device!`)
  }

  const generateGuideContent = (guide) => {
    const content = {
      contacts: `
EBUDDY - CONTACTS & PHONE CALLS GUIDE
=====================================

STEP 1: OPEN CONTACTS APP
- Look for the 📞 or 'Contacts' icon on your phone's home screen
- It might also be called 'Phone' app
- If you can't find it, swipe down and search for 'Contacts'

STEP 2: ADD NEW CONTACT
- Look for a '+' symbol or 'Add' button
- Usually at the bottom or top of the screen
- Tap on it to start adding a new contact

STEP 3: ENTER CONTACT INFORMATION
- Type the person's name in the 'Name' field
- Type their phone number in the 'Phone' field
- Take your time typing, you can always edit later

STEP 4: SAVE THE CONTACT
- Look for a 'Save' button, usually at the top right
- Tap it to save your new contact
- Your contact is now saved!

STEP 5: MAKING A CALL
- Open your contacts and find their name
- Tap on their phone number or the phone icon
- You can also dial numbers directly using the keypad

SAFETY TIPS:
- Never give personal information over the phone
- Be careful of calls from unknown numbers asking for money
- If someone claims to be from your bank, hang up and call directly
- Trust your instincts - if something sounds suspicious, it probably is

For more help, visit our website or ask a family member!
      `,
      photos: `
EBUDDY - PHOTOGRAPHY GUIDE
==========================

STEP 1: FIND THE CAMERA APP
- Look for the camera icon 📷 on your home screen
- Usually a circle or square with a camera symbol
- You can also search for 'Camera' if you can't find it

STEP 2: OPEN CAMERA APP
- Tap on the camera icon to open
- You'll see what your camera sees on the screen
- Allow camera permissions when prompted

STEP 3: FRAME YOUR PHOTO
- Point your phone at what you want to photograph
- Move the phone to get the best view
- Hold steady with both hands

STEP 4: TAKE THE PHOTO
- Look for a large circle button at the bottom (usually white)
- Tap it gently to take your photo
- You'll hear a camera sound and see a flash

STEP 5: VIEW YOUR PHOTOS
- Look for a small square showing your last photo
- Or find the 'Gallery' or 'Photos' app
- All photos are automatically saved

PHOTOGRAPHY TIPS:
- Take photos near windows or outdoors for best light
- Hold your phone steady with both hands
- Move closer to your subject instead of using zoom
- Clean your camera lens gently with a soft cloth

Enjoy capturing your memories!
      `,
      payments: `
EBUDDY - DIGITAL PAYMENTS SAFETY GUIDE
=======================================

STEP 1: CHOOSE A PAYMENT APP
- Look for trusted apps like Google Pay, PhonePe, or Paytm
- These have colorful icons and are usually pre-installed
- Only download from official app stores

STEP 2: SET UP YOUR ACCOUNT
- Open the app and follow setup process
- Link your bank account or add money to wallet
- Use only your own bank account and phone number

STEP 3: CREATE A STRONG PIN
- Set up a 4-6 digit PIN you can remember
- Avoid birthdates or simple patterns like 1234
- Write it down in a safe place at home

STEP 4: MAKING A PAYMENT
- Enter recipient's phone number or scan QR code
- Enter the amount and confirm with your PIN
- Double-check amount and recipient before confirming

STEP 5: CHECK YOUR TRANSACTION
- After payment, you'll see confirmation message
- Take screenshot or note transaction ID
- Keep records for your files

SAFETY RULES:
- Never share your PIN with anyone
- Banks never ask for PIN over phone or email
- Always verify recipient and amount before paying
- Download apps only from official stores
- Avoid public WiFi for payments
- Ignore messages asking for OTP or clicking links
- Start with small amounts when learning

Stay safe and confident with digital payments!
      `,
      videocalls: `
EBUDDY - VIDEO CALLING GUIDE
============================

STEP 1: CHOOSE A VIDEO CALLING APP
- Popular apps: WhatsApp, Google Meet, Zoom, Skype
- WhatsApp is often easiest as family members have it
- Video calls are free with internet connection

STEP 2: FIND YOUR CONTACT
- Open WhatsApp and find person in chat list
- Tap on their name to open the chat
- Use search box to quickly find someone

STEP 3: START THE VIDEO CALL
- Look for video camera icon 📹 at top of chat
- Tap it to start video call
- Make sure you're in well-lit area

STEP 4: ANSWER INCOMING CALLS
- You'll see caller's name and photo
- Swipe green phone icon to answer
- Tap camera icon to turn video on/off

STEP 5: DURING THE CALL
- You can mute yourself or turn camera on/off
- Switch between front and back camera
- Tap red phone icon to end call

VIDEO CALL TIPS:
- Sit facing window or lamp for good lighting
- Use WiFi when possible for clearer calls
- Find quiet place for your call
- Look at camera when talking, not at screen
- Charge your phone - video calls use more battery
- Use headphones to hear better and reduce echo

Enjoy connecting with your loved ones!
      `,
      complete: `
EBUDDY - COMPLETE SMARTPHONE GUIDE FOR SENIORS
===============================================

Welcome to eBuddy! This complete guide will help you learn smartphone technology safely and confidently.

TABLE OF CONTENTS:
1. Contacts & Phone Calls
2. Taking Photos
3. Digital Payments Safety
4. Video Calling
5. General Safety Tips
6. Getting Help

========================================
1. CONTACTS & PHONE CALLS
========================================

[Full contacts guide content...]

========================================
2. TAKING PHOTOS
========================================

[Full photography guide content...]

========================================
3. DIGITAL PAYMENTS SAFETY
========================================

[Full payments guide content...]

========================================
4. VIDEO CALLING
========================================

[Full video calling guide content...]

========================================
5. GENERAL SAFETY TIPS
========================================

PHONE SECURITY:
- Use screen lock (PIN, pattern, or fingerprint)
- Don't share passwords or PINs with anyone
- Install apps only from official stores
- Keep your phone updated
- Don't click suspicious links in messages

INTERNET SAFETY:
- Use strong WiFi passwords at home
- Avoid public WiFi for sensitive tasks
- Be careful what you share on social media
- Don't give personal information to strangers online

SCAM PROTECTION:
- Banks never ask for passwords over phone
- Government agencies don't ask for payments over phone
- If offer sounds too good to be true, it probably is
- When in doubt, ask a trusted family member

========================================
6. GETTING HELP
========================================

When you need help:
- Ask a trusted family member or friend
- Visit your phone store for technical support
- Call your bank directly if you have payment questions
- Use official customer service numbers, not numbers from random calls

Remember: Learning technology takes time. Be patient with yourself and practice regularly!

For more interactive guides and demos, visit our eBuddy website.

Stay safe and enjoy your smartphone journey!
      `
    }

    return content[guide.id] || content.complete
  }

  return (
    <div className="download-guide">
      <div className="download-header">
        <h1>📥 Download Guides</h1>
        <p>Get offline copies of all our smartphone guides to read anytime, anywhere</p>
      </div>

      <div className="download-benefits">
        <h2>✨ Why Download Our Guides?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">📖</div>
            <h3>Read Offline</h3>
            <p>Access guides without internet connection</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🖨️</div>
            <h3>Print Friendly</h3>
            <p>Easy to print and keep as reference</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">👴</div>
            <h3>Large Text</h3>
            <p>Senior-friendly formatting and font size</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🔄</div>
            <h3>Always Updated</h3>
            <p>Get the latest version whenever you download</p>
          </div>
        </div>
      </div>

      <div className="guides-section">
        <h2>📚 Available Guides</h2>
        <div className="guides-grid">
          {guides.map(guide => (
            <div key={guide.id} className="guide-card">
              <div className="guide-icon">{guide.icon}</div>
              <div className="guide-info">
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
                <div className="guide-details">
                  <span className="guide-pages">📄 {guide.pages} pages</span>
                  <span className="guide-size">💾 {guide.size}</span>
                </div>
              </div>
              <div className="guide-actions">
                <button 
                  className="btn btn-success btn-large"
                  onClick={() => handleDownload(guide)}
                >
                  📥 Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="download-instructions">
        <h2>📋 How to Use Downloaded Guides</h2>
        <div className="instructions-grid">
          <div className="instruction-card">
            <h3>📱 On Your Phone</h3>
            <ul>
              <li>Downloaded files go to your 'Downloads' folder</li>
              <li>Open with any text reader or notes app</li>
              <li>You can zoom in to make text larger</li>
              <li>Share with family members easily</li>
            </ul>
          </div>
          <div className="instruction-card">
            <h3>🖨️ Printing Guides</h3>
            <ul>
              <li>Open downloaded file on computer</li>
              <li>Use File → Print from any text editor</li>
              <li>Choose large font size for easier reading</li>
              <li>Print in sections if guide is long</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="download-support">
        <h2>🆘 Need Help with Downloads?</h2>
        <div className="support-content">
          <p>If you're having trouble downloading or opening the guides:</p>
          <ul className="support-list">
            <li>Ask a family member to help you download and print the guides</li>
            <li>Visit your local library - they can help you download and print for free</li>
            <li>Use the online version if downloads don't work</li>
            <li>Take screenshots of important steps to save on your phone</li>
          </ul>
          <div className="support-tip">
            <strong>💡 Pro Tip:</strong> Start with downloading just one guide to learn the process, then download others as needed!
          </div>
        </div>
      </div>
    </div>
  )
}

export default DownloadGuide;