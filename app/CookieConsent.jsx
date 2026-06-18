'use client'
import { useState, useEffect } from 'react'
import { FaCookieBite } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion' // npm install framer-motion

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) {
      // delay 5 detik baru muncul
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'accepted')
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookie_consent', 'declined')
    setShowBanner(false)
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed bottom-4 left-4 max-w-sm
                     bg-white/10 backdrop-blur-md border border-white/20
                     text-white p-4 rounded-2xl shadow-lg
                     flex items-center space-x-4 z-50"
        >
          <FaCookieBite className="text-5xl text-yellow-400 flex-shrink-0" />

          <div className="flex-1">
            <p className="text-sm mb-3">
              We use cookies to improve your experience. 
              <a href="/privacy" className="underline ml-1 hover:text-blue-300">
                Privacy Policy
              </a>
            </p>
            <div className="flex space-x-2">
              <button
                onClick={acceptCookies}
                className="px-4 py-2 bg-green-500/70 hover:bg-green-500/90 rounded-lg text-sm font-medium"
              >
                Accept
              </button>
              <button
                onClick={declineCookies}
                className="px-4 py-2 bg-red-500/70 hover:bg-red-500/90 rounded-lg text-sm font-medium"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
