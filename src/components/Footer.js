import React from "react"
import { Icon } from "@iconify/react"

export default function Footer(props) {
  return (
    <footer className="footer-global">
      <div className="copyright-wrapper">
        <a
          href="https://gniarchos.github.io/portfolio/"
          target="_blank"
          className="copyright link-portfolio"
        >
          Giannis Niarchos
        </a>
        <h4 className="copyright"> © 2022-2023 </h4>
      </div>

      <div className="github-div">
        <Icon className="git-img" icon="ant-design:github-filled" width="29" />
        <a
          href="https://github.com/gniarchos/iSeeU-InstagramTracker"
          target="_blank"
          className="source-link"
        >
          Source Code
        </a>
      </div>
      <p>v1.1.1</p>
    </footer>
  )
}
