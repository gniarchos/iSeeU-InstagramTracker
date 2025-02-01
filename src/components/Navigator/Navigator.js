import React, { useContext } from "react"
import { Icon } from "@iconify/react"
import { ProcessContext } from "../../App"
import logo from "../../images/iSeeU-logo-white.png"
import "./Navigator.css"
import instagram_logo from "../../images/instagram_logo.gif"

export default function About() {
  const {
    process,
    setAnimation,
    animation,
    showRestart,
    showHelp,
    setShowHelp,
  } = useContext(ProcessContext)

  function startProc() {
    setAnimation(!animation)
  }

  function sendHelp() {
    setShowHelp(!showHelp)
  }

  return (
    <div className="navigator-container">
      <nav>
        <img
          className="logo-img"
          src={logo}
          onClick={() => window.location.reload()}
          alt="logo"
        />
      </nav>
      <div className="navigator-about">
        <h1 className="navigator-title">
          Find who doesn't follow you back on Instagram!
        </h1>
        <img
          src={instagram_logo}
          className="insta-logo-gif"
          alt="instagram-logo"
        />

        {process && !showRestart && (
          <button onClick={sendHelp} className="app-actions-button">
            <i className="animation stopped"></i>

            {showHelp === true ? "Go Back" : "Get Help"}
            <i className="animation stopped"></i>
          </button>
        )}

        {process && showRestart && (
          <button
            onClick={() => window.location.reload()}
            className="app-actions-button"
          >
            <i className="animation"></i>
            Restart
            <i className="animation"></i>
          </button>
        )}

        {!process && (
          <button onClick={startProc} className="app-actions-button">
            <i className="animation"></i>
            Get Started
            <i className="animation"></i>
          </button>
        )}
      </div>
    </div>
  )
}
