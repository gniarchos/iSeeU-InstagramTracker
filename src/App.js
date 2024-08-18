import "./index.css"
import Navigator from "./components/Navigator/Navigator"
import LandingInfo from "./components/LandingInfo/LandingInfo"
import Footer from "./components/Footer/Footer"
import Finder from "./components/Finder/Finder"
import React, { useRef, createContext, useState } from "react"
import Help from "./components/Help/Help"

export const ProcessContext = createContext()

function App() {
  const [process, setProcess] = useState(false)
  const [test, setTest] = useState(false)
  const [animation, setAnimation] = useState(false)
  const [showRestart, setShowRestart] = useState(false)
  const [showHelp, setShowHelp] = useState(false)
  const helpRef = useRef()

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
