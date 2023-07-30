import React from "react"
import { Icon } from "@iconify/react"
import { ProcessContext } from "../App"
import logo from "../images/iSeeU-logo-white.png"

export default function About() {
  const {
    process,
    setAnimation,
    animation,
    showRestart,
    showHelp,
    setShowHelp,
  } = React.useContext(ProcessContext)

  function startProc() {
    setAnimation(!animation)
  }

  function sendHelp() {
    setShowHelp(!showHelp)
  }

  return (
    <div className="about-container">
      <nav>
        <img
          className="logo-img"
          src={logo}
          onClick={() => window.location.reload()}
          alt="logo"
        />
      </nav>
      <div className="about">
        <h1 className="main-title">
          Find who doesn't follow you back on Instagram!
        </h1>
        <img
          src="https://media.giphy.com/media/IbTZSfHDUDSmOCkd3q/giphy.gif"
          className="insta-logo-gif"
          alt="instagram-logo"
        />

        {process === true && showRestart === false && (
          <button className="button-proc" onClick={sendHelp}>
            <span className="label">{showHelp === true ? "Back" : "Help"}</span>
            <span className="icon">
              {showHelp === false && (
                <Icon
                  icon="eva:question-mark-circle-fill"
                  width="20"
                  height="20"
                />
              )}

              {showHelp === true && (
                <Icon icon="akar-icons:arrow-back" width="20" height="20" />
              )}
            </span>
          </button>
        )}

        {process === true && showRestart === true && (
          <button
            className="button-proc"
            onClick={() => window.location.reload()}
          >
            <span className="label">Restart</span>
            <span className="icon">
              <Icon icon="ci:refresh" width="20" height="20" />
            </span>
          </button>
        )}

        {process === false && (
          <button className="button-proc" onClick={startProc}>
            <span className="label">Get Started</span>
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                ></path>
              </svg>
            </span>
          </button>
        )}
      </div>
    </div>
  )
}
