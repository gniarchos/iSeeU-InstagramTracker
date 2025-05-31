import "./index.css"
import Navigator from "./components/Navigator/Navigator"
import LandingInfo from "./components/LandingInfo/LandingInfo"
import Footer from "./components/Footer/Footer"
import Finder from "./components/Finder/Finder"
import React, { useRef, createContext, useState, useEffect } from "react"
import Help from "./components/Help/Help"

export const ProcessContext = createContext()

function App() {
  const [process, setProcess] = useState(false)
  const [test, setTest] = useState(false)
  const [animation, setAnimation] = useState(false)
  const [showRestart, setShowRestart] = useState(false)
  const [showHelp, setShowHelp] = useState(false)
  const helpRef = useRef()

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/iSeeU-InstagramTracker/service-worker.js", {
          scope: "/iSeeU-InstagramTracker/",
        })
        .then((registration) => {
          console.log("Service Worker registered: ", registration)
        })
        .catch((error) => {
          console.log("Service Worker registration failed: ", error)
        })
    })
  }

  return (
    <div>
      <ProcessContext.Provider
        value={{
          process,
          setProcess,
          test,
          setTest,
          animation,
          setAnimation,
          showRestart,
          setShowRestart,
          showHelp,
          setShowHelp,
          helpRef,
        }}
      >
        <Navigator />
        {process === false && showHelp === false && <LandingInfo />}
        {process === true && showHelp === false && <Finder />}
        {showHelp === true && <Help />}
      </ProcessContext.Provider>
      <Footer />
    </div>
  )
}

export default App
