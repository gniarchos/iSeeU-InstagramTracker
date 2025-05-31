import React from "react"
import { Icon } from "@iconify/react"
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-copyright-container">
        <a
          href="https://gniarchos.github.io/portfolio/"
          target="_blank"
          className="footer-copyright link-portfolio"
        >
          Giannis Niarchos
        </a>
        <h4 className="footer-copyright"> © {new Date().getFullYear()} </h4>
      </div>

      <div className="footer-github-container">
        <Icon
          className="footer-git-img"
          icon="ant-design:github-filled"
          width="22"
        />
        <a
          href="https://github.com/gniarchos/iSeeU-InstagramTracker"
          target="_blank"
          className="footer-git-link"
        >
          Source Code
        </a>
      </div>
    </footer>
  )
}
