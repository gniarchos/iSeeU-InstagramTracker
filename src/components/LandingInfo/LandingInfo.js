import React, { useContext } from "react"
import { Icon } from "@iconify/react"
import { ProcessContext } from "../../App"
import "./LandingInfo.css"

export default function LandingInfo() {
  const { process, setProcess, animation } = useContext(ProcessContext)

  function handleAnimationEnding() {
    setProcess(!process)
  }

  return (
    <div
      className={animation && "landing-wrapper-out"}
      onAnimationEnd={handleAnimationEnding}
    >
      <div className="landing-about">
        <h1 className="landing-title">iSeeU Info</h1>
        <p className="landing-about-text">
          iSeeU is a <b>free service</b> for anonymously obtaining the list of
          people who don't follow you back on Instagram. With this web app, you
          avoid the risk of Instagram disabling or banning your account. <br />
          <br />
          Just click{" "}
          <b>
            <i>
              <u>GET STARTED</u>
            </i>
          </b>{" "}
          to start using iSeeU.
        </p>
      </div>

      <div className="landing-info-cards-container">
        <div className="landing-facts">
          <Icon icon="material-symbols:no-accounts" className="landing-icons" />
          <h4 className="facts-title">No login required</h4>
          <p className="facts-subtitle">
            There's <b>no need to login</b> to your Instagram account through
            this app.
          </p>
        </div>
        <div className="landing-facts">
          <Icon icon="ooui:user-anonymous" className="landing-icons" />
          <h4 className="facts-title">100% anonymity</h4>
          <p className="facts-subtitle">
            We <b>do not store or collect</b> any of your personal information.
          </p>
        </div>
        <div className="landing-facts">
          <Icon icon="mage:checklist-note-fill" className="landing-icons" />
          <h4 className="facts-title">Fast and easy</h4>
          <p className="facts-subtitle">
            With a few easy steps, you will have the list of all the users who{" "}
            <b>don't follow you back</b> on Instagram.
          </p>
        </div>
      </div>
    </div>
  )
}
