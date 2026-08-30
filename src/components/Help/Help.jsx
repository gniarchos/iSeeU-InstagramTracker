import React from "react"
import "./Help.css"

export default function Help() {
  return (
    <div className="help-wrapper">
      <h1 className="help-title">Guide: How to download the zip file</h1>
      <p className="help-source">Updated: 30/08/2026</p>

      <div>
        <div className="help-methods">
          <div className="help-title-container">
            <h2 className="help-methods-title">Step by step guide</h2>
          </div>

          <ol>
            <li className="li-computer">Go to Instagram</li>
            <li className="li-mobile">
              Go to <b>Settings</b>
            </li>
            <li className="li-mobile">
              Then <b>Accounts Center</b>
            </li>
            <li className="li-mobile">
              Find and select <b>Your information and permissions</b>
            </li>
            <li className="li-mobile">
              Then <b>Export your information</b>
            </li>
            <li className="li-mobile">
              Select <b>Create export</b>
            </li>
            <li className="li-mobile">
              Choose your <b>Instagram account</b>
            </li>
            <li className="li-mobile">
              Select <b>Export to Device</b>.
            </li>
            <li className="li-mobile">
              <u>
                <b style={{ color: "red" }}>IMPORTANT!</b>
              </u>{" "}
              Under <b>Customize information</b> clear every section and select
              only <b>Followers and following</b>
            </li>
            <li className="li-mobile">
              <u>
                <b style={{ color: "red" }}>IMPORTANT!</b>
              </u>
              &nbsp;Select <b>Date range</b> and select <b>All time</b>
            </li>
            <li className="li-mobile">
              <u>
                <b style={{ color: "red" }}>IMPORTANT!</b>
              </u>
              &nbsp;Tap <b>Format</b> and select <b>JSON</b>
            </li>
            <li className="li-mobile">
              Select <b>Start export</b>
            </li>
            <li className="li-mobile">
              You'll soon receive an email from Instagram and follow
              instructions to download your file.
            </li>
            <li className="li-mobile">
              Save the file somewhere in your device and{" "}
              <b>
                upload that <b>zip file</b> to the iSeeU.
              </b>
            </li>
            <li className="li-mobile">
              <b>Enjoy! 🎉</b>
            </li>
          </ol>
        </div>

        <div className="help-methods">
          <div className="help-title-container">
            <h2 className="help-methods-title">Learn More</h2>
          </div>

          <p>
            For more info check:{" "}
            <a
              className="help-source-link"
              href="https://help.instagram.com/181231772500920"
              target="_blank"
            >
              Instagram Help Center
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
