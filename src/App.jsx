import "./index.css"
import Navigator from "./components/Navigator/Navigator"
import LandingInfo from "./components/LandingInfo/LandingInfo"
import Footer from "./components/Footer/Footer"
import Finder from "./components/Finder/Finder"
import React, { useRef, createContext, useState, useEffect } from "react"
import Help from "./components/Help/Help"
import { useCheckAppVersion } from "./hooks/useCheckAppVersion"
import { Alert, AlertTitle, useMediaQuery, useTheme } from "@mui/material"
import AnnouncementRoundedIcon from "@mui/icons-material/AnnouncementRounded"
import { clearAppCache } from "./utils/clearAppCache"
import Button from "@mui/material/Button"

export const ProcessContext = createContext()

function App() {
  const [process, setProcess] = useState(false)
  const [test, setTest] = useState(false)
  const [animation, setAnimation] = useState(false)
  const [showRestart, setShowRestart] = useState(false)
  const [showHelp, setShowHelp] = useState(false)
  const helpRef = useRef()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const { isUpdateAvailable, checkAppVersion } = useCheckAppVersion()

  useEffect(() => {
    if (import.meta.env.DEV) return

    checkAppVersion()

    // Έλεγχος κάθε 1 λεπτο
    const interval = setInterval(checkAppVersion, 60000)
    return () => clearInterval(interval)
  }, [])

  async function handleUpdateClick() {
    await clearAppCache()

    const currentPath = window.location.pathname
    const separator = window.location.search ? "&" : "?"

    window.location.href =
      window.location.origin +
      currentPath +
      window.location.search +
      separator +
      "update=" +
      Date.now()
  }

  const action = (
    <Button
      color="error"
      size="small"
      variant="contained"
      sx={{ whiteSpace: "nowrap" }}
      onClick={handleUpdateClick}
    >
      Update Now
    </Button>
  )

  return (
    <div className="App">
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
        {isUpdateAvailable && (
          <Alert
            sx={{
              whiteSpace: "pre-line",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "rgba(209, 24, 24, 0.19) 0px 2px 8px 0px",
            }}
            icon={<AnnouncementRoundedIcon />}
            action={action}
            severity="warning"
          >
            <AlertTitle sx={{ fontWeight: "600" }}>
              New App Version Available
            </AlertTitle>
            The latest version of the app is now available. Press{" "}
            <b style={{ color: "#ff3131" }} className="fw-bold">
              Update
            </b>{" "}
            now!
          </Alert>
        )}
        {process === false && showHelp === false && <LandingInfo />}
        {process === true && showHelp === false && <Finder />}
        {showHelp === true && <Help />}
      </ProcessContext.Provider>

      <Footer />
    </div>
  )
}

export default App
