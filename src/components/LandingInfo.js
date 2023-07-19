import React from "react"
import { Icon } from "@iconify/react"
import { ProcessContext } from "../App"

export default function LandingInfo() {
  const { process, setProcess, animation } = React.useContext(ProcessContext)

  function handleAnimationEnding() {
    setProcess(!process)
  }

  return (
    <>
      <div
        className={animation === true ? "landingInfo-out" : "landingInfo"}
        onAnimationEnd={handleAnimationEnding}
      >
        <div className="prolog-about">
          <h1 className="prolog-title">iSeeU Info</h1>
          <p className="prolog-text">
            iSeeU is a free service for getting anonymously the list of people
            who don't follow you back on Instagram. With this web app you don't
            have the risk that Instagram will disable or ban your account.
          </p>
        </div>

        <div className="landing-divs-wrapper">
          <div className="facts-div">
            {/* <Icon icon="carbon:login" color="#F04765" /> */}
            <Icon icon="ic:outline-log-in" color="#F04765" width={60} />
            <h4 className="facts-title">No account needed</h4>
            <p className="facts-subtitle">
              You don't need to login to your Instagram account through this
              app.
            </p>
          </div>
          <div className="facts-div">
            <Icon icon="ooui:user-anonymous" color="#F04765" width={60} />
            <h4 className="facts-title">100% anonymity</h4>
            <p className="facts-subtitle">
              You will be completely anonymous. We do not store or collect any
              of your personal information (the files you will upload don't
              contain any personal info).
            </p>
          </div>
          <div className="facts-div">
            {/* <Icon icon="ooui:user-anonymous" color="#F04765" width={70} /> */}
            <Icon
              icon="akar-icons:circle-check-fill"
              color="#F04765"
              width={60}
            />
            <h4 className="facts-title">Fast and easy</h4>
            <p className="facts-subtitle">
              With a few easy steps you will have the list of all the people who
              doesn't follow you back on Instagram.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
