import "./index.css"
import About from "./components/About"
import LandingInfo from "./components/LandingInfo"
import Footer from "./components/Footer"
import Finder from "./components/Finder"
import React from "react"
import Help from "./components/Help"

export const ProcessContext = React.createContext()

function App() {
  const [process, setProcess] = React.useState(false)
  const [test, setTest] = React.useState(false)
  const [animation, setAnimation] = React.useState(false)
  const [showRestart, setShowRestart] = React.useState(false)
  const [showHelp, setShowHelp] = React.useState(false)
  const helpRef = React.useRef()

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
        <About />
        {process === false && showHelp === false && <LandingInfo />}
        {process === true && showHelp === false && <Finder />}
        {showHelp === true && <Help />}
      </ProcessContext.Provider>
      <Footer />
    </div>
  )
}

export default App
