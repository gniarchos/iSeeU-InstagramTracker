import React from "react"
import { Icon } from "@iconify/react"

export default function Footer(props) {
  function gotoGithub() {
    window.location.href = "https://github.com/gniarchos/iSeeU-InstagramTracker"
  }

  return (
    <footer className="footer-global">
      <p>Giannis Niarchos © 2022-2023 </p>
      <div onClick={gotoGithub} className="github-div">
        <Icon className="git-img" icon="ant-design:github-filled" width="29" />
        <p>Source Code</p>
      </div>
    </footer>
  )
}
