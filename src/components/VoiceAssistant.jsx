import { useState, useEffect } from 'react'
import './VoiceAssistant.css'

function VoiceAssistant({ t, setCurrentPage }) {
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [isSupported, setIsSupported] = useState(false)

  useEffect(() => {
    setIsSupported('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)
  }, [])

  const recognition = isSupported ? new (window.SpeechRecognition || window.webkitSpeechRecognition)() : null

  if (recognition) {
    recognition.continuous = false
    recognition.interimResults = false
    recognition.lang = 'en-US'

    recognition.onresult = (event) => {
      const command = event.results[0][0].transcript.toLowerCase()
      setTranscript(command)
      handleVoiceCommand(command)
    }

    recognition.onend = () => {
      setIsListening(false)
    }
  }

  const handleVoiceCommand = (command) => {
    // Navigation commands
    if (command.includes('home') || command.includes('main')) {
      setCurrentPage('home')
      speak('Going to home page')
    } else if (command.includes('contact') || command.includes('call') || command.includes('phone')) {
      setCurrentPage('contacts')
      speak('Opening contacts guide')
    } else if (command.includes('photo') || command.includes('camera') || command.includes('picture')) {
      setCurrentPage('photos')
      speak('Opening photos guide')
    } else if (command.includes('payment') || command.includes('money') || command.includes('pay')) {
      setCurrentPage('payments')
      speak('Opening payments guide')
    } else if (command.includes('video') || command.includes('call')) {
      setCurrentPage('videocall')
      speak('Opening video call guide')
    } else if (command.includes('download') || command.includes('guide')) {
      setCurrentPage('download')
      speak('Opening download section')
    } else if (command.includes('demo') || command.includes('walkthrough')) {
      setCurrentPage('demo')
      speak('Starting demo walkthrough')
    } else {
      speak('Sorry, I did not understand that command. Try saying "open contacts guide" or "help with photos"')
    }
  }

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 0.8
      utterance.pitch = 1
      utterance.volume = 0.8
      speechSynthesis.speak(utterance)
    }
  }

  const toggleListening = () => {
    if (!isSupported) {
      alert('Voice commands are not supported in this browser. Please try using Chrome or Edge.')
      return
    }

    if (isListening) {
      recognition.stop()
      setIsListening(false)
    } else {
      recognition.start()
      setIsListening(true)
      setTranscript('')
    }
  }

  return (
    <div className="voice-assistant">
      <div className="voice-assistant-content">
        <div className="voice-assistant-header">
          <h3>🎙️ Voice Helper</h3>
        </div>
        
        <button 
          className={`voice-button ${isListening ? 'listening' : ''}`}
          onClick={toggleListening}
          aria-label="Voice command button"
        >
          <div className="voice-icon">
            {isListening ? '🎙️' : '🔊'}
          </div>
          <span className="voice-status">
            {isListening ? t.voice.listening : t.voice.stopped}
          </span>
        </button>

        {transcript && (
          <div className="voice-transcript">
            <p><strong>You said:</strong> "{transcript}"</p>
          </div>
        )}

        <div className="voice-commands">
          <p className="commands-title">📝 Voice Commands:</p>
          <div className="commands-list">
            <div className="command-item">🏠 "Go home" or "Main page"</div>
            <div className="command-item">📞 "Open contacts" or "Help with calls"</div>
            <div className="command-item">📷 "Show photos" or "Camera guide"</div>
            <div className="command-item">💳 "Open payments" or "Help with money"</div>
            <div className="command-item">📹 "Video calls" or "Video guide"</div>
            <div className="command-item">📥 "Download guide"</div>
            <div className="command-item">🎯 "Start demo"</div>
          </div>
        </div>

        {!isSupported && (
          <div className="voice-warning">
            <p>⚠️ Voice commands need Chrome or Edge browser to work properly.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default VoiceAssistant;