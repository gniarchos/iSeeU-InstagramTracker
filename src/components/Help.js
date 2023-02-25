import React from "react"
import { ProcessContext } from "../App"
import check from "../images/check.png"
import settings from "../images/settings.png"

export default function Help() {
  const {
    process,
    setProcess,
    test,
    setTest,
    setAnimation,
    animation,
    showRestart,
    setShowRestart,
    showHelp,
    setShowHelp,
  } = React.useContext(ProcessContext)

  return (
    <div className="help-div">
      <h1>Help: How to download the required files</h1>
      <p className="help-source">
        Source:
        <a href="https://help.instagram.com/181231772500920">
          Instagram Help Center
        </a>
      </p>

      <div>
        <div className="help-methods">
          <div className="help-title-div">
            <h2>
              How to download your data from <u>mobile</u> website
            </h2>
          </div>

          <ol>
            <li className="li-computer">
              Go to your preferred web browser and navigate to{" "}
              <b> instagram.com</b>.
            </li>
            <li className="li-computer">
              <b>Login</b> to your account.
            </li>
            <li className="li-mobile">
              Tap your profile picture in the bottom right to go to your
              profile.
            </li>
            <li className="li-mobile">
              Tap <b>Settings</b> in the top left.
            </li>
            <li className="li-mobile">
              Tap <b>Privacy and security.</b>
            </li>
            <li className="li-mobile">
              Scroll down to <b>Data download</b> and tap{" "}
              <b> Request download.</b>
            </li>
            <li className="li-mobile">
              Enter the email address where you'd like to receive a link to your
              data.
            </li>
            <li className="li-mobile">
              <u>
                <b>IMPORTANT!</b>
              </u>
              &nbsp;Tap the checkbox next to <b>JSON</b> to select the correct
              format that you must receive your data in, then tap
              <b> Next.</b>
            </li>
            <li className="li-mobile">
              Enter your Instagram account password and tap
              <b> Request download.</b>
            </li>
            <li className="li-mobile">
              You'll soon receive an email titled <b>Your Instagram data </b>
              with a link to your data. Tap <b>Download data</b> and follow the
              instructions to finish downloading your information.
            </li>
            <li className="li-mobile">
              Save the file somewhere in your filesystem of your phone and
              <b> Extract it.</b>
            </li>
            <li className="li-mobile">
              Inside the extracted folder you should navigate to the folder with
              the name <b>followers_and_following.</b>
            </li>
            <li className="li-mobile">
              The required files you will need to upload are
              <b> following.json</b> and <b>followers.json.</b>
            </li>
          </ol>

          <p>
            <b>Note:</b> Instagram states that it may take up to 14 days for
            them to email you a download link, but usually you will receive the
            email sooner (from minutes to hours).
          </p>
        </div>

        <div className="help-methods">
          <div className="help-title-div">
            <h2>
              How to download your data from <u>computer</u> website
            </h2>
          </div>

          <ol>
            <li className="li-computer">
              Go to your preferred web browser and navigate to{" "}
              <b> instagram.com</b>.
            </li>
            <li className="li-computer">
              <b>Login</b> to your account.
            </li>
            <li className="li-computer">
              Click <b>More</b> in the bottom left, then click <b>Settings</b>.
            </li>
            <li className="li-computer">
              Click <b>Privacy and security.</b>
            </li>
            <li className="li-computer">
              Scroll down to <b>Data download</b> and click
              <b>Request download.</b>
            </li>
            <li className="li-computer">
              Enter the email address where you'd like to receive a link to your
              data.
            </li>
            <li className="li-computer">
              <u>
                <b>IMPORTANT!</b>
              </u>
              &nbsp;Click the checkbox next to <b>JSON</b> to select the correct
              format that you must receive your data in, then tap
              <b> Next.</b>
            </li>
            <li className="li-computer">
              Enter your Instagram account password and click
              <b> Request download.</b>
            </li>
            <li className="li-computer">
              You'll soon receive an email titled <b>Your Instagram data </b>
              with a link to your data. Click <b>Download data</b> and follow
              the instructions to finish downloading your information.
            </li>
            <li className="li-computer">
              Save the file somewhere in your filesystem of your computer and
              <b> Extract it.</b>
            </li>
            <li className="li-computer">
              Inside the extracted folder you should navigate to the folder with
              the name <b>followers_and_following.</b>
            </li>
            <li className="li-computer">
              The required files you will need to upload are
              <b> following.json</b> and <b>followers.json.</b>
            </li>
          </ol>

          <p>
            <b>Note:</b> Instagram states that it may take up to 14 days for
            them to email you a download link, but usually you will receive the
            email sooner (from minutes to hours).
          </p>
        </div>

        <div className="help-methods">
          <div className="help-title-div">
            <h2>How to download your data from iOS and Android app</h2>
          </div>

          <div className="help-app-answer">
            <p>
              Sorry, you can't. This method works only with browser version of
              Instagram. For more info see above.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
