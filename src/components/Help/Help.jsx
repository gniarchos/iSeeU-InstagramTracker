import React from "react"
import "./Help.css"

export default function Help() {
  return (
    <div className="help-wrapper">
      <h1 className="help-title">Guide: How to download the zip file</h1>
      <p className="help-source">Updated: 18/08/2024</p>

      <div>
        <div className="help-methods">
          <div className="help-title-container">
            <h2 className="help-methods-title">
              <u>iOS</u> and <u>Android</u> app
            </h2>
          </div>

          <ol>
            <li className="li-computer">
              Download Instagram app and <b>Login</b> to your account.
            </li>
            <li className="li-mobile">
              Tap your profile picture in the bottom right to go to your
              profile.
            </li>
            <li className="li-mobile">
              Tap on <b>Settings</b> icon in the top right and then{" "}
              <b>Your Activity</b>.
            </li>
            <li className="li-mobile">
              Tap <b>Download your information.</b>
            </li>
            <li className="li-mobile">
              Tap <b>Download or transfer information</b>.
            </li>
            <li className="li-mobile">
              Select your instagram account you want to download your data and
              tap <b>Next</b>.
            </li>
            <li className="li-mobile">
              Tap <b>Some of your information</b> and then select only{" "}
              <b>Followers and following</b> and tap <b>Next</b>.
            </li>
            <li className="li-mobile">
              Tap <b>Download to device</b> and then tap <b>Next</b>.
            </li>
            <li className="li-mobile">
              <u>
                <b style={{ color: "red" }}>IMPORTANT!</b>
              </u>
              &nbsp;Tap <b>Date range</b> and select <b>All time</b>, then tap{" "}
              <b>Save</b>.
            </li>
            <li className="li-mobile">
              <u>
                <b style={{ color: "red" }}>IMPORTANT!</b>
              </u>
              &nbsp;Tap <b>Format</b> and select <b>JSON</b>, then tap <b>X.</b>
            </li>
            <li className="li-mobile">
              Finally tap <b>Create files.</b>
            </li>
            <li className="li-mobile">
              You'll soon receive an email from Instagram and follow
              instructions to download your file.
            </li>
            <li className="li-mobile">
              Save the file somewhere in your filesystem of your mobile and{" "}
              <b>upload that zip file to the iSeeU app.</b>
            </li>
            <li className="li-mobile">
              <b>Enjoy!</b>
            </li>
          </ol>
        </div>

        <div className="help-methods">
          <div className="help-title-container">
            <h2 className="help-methods-title">
              More Methods: <u>PC</u> and <u>Mobile</u> website
            </h2>
          </div>

          <p>
            For more info check:{" "}
            <a
              className="help-source-link"
              href="https://help.instagram.com/181231772500920"
            >
              Instagram Help Center
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
