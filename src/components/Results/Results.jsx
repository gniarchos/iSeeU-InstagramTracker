import React from "react"
import "./Results.css"
import { Icon } from "@iconify/react/dist/iconify.js"

export default function Results({ notFollowingBack }) {
  const notFollowersList = notFollowingBack
    .sort((a, b) => b.date_followed - a.date_followed)
    .map((user, index) => {
      const options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      }
      const formattedDate = new Intl.DateTimeFormat("el-GR", options).format(
        user.date_followed
      )

      return (
        <tr>
          <td>{index + 1}</td>
          <td>{user.user}</td>
          <td>{formattedDate}</td>
          <td>
            <a
              target="_blank"
              href={user.user_link}
              className="results-profile-link"
            >
              <Icon icon="lets-icons:user-cicrle-duotone" />
            </a>
          </td>
        </tr>
      )
    })

  return (
    <div className="results-list-wrapper">
      <div className="results-info">
        <h1 className="results-title">Users who don't follow you back</h1>
        <p className="results-about-text">The moment of truth.</p>
      </div>
      <table>
        <tbody>
          <tr>
            <th style={{ width: "5%" }}>#</th>
            <th>Username</th>
            <th style={{ width: "20%" }}>Date followed</th>
            <th style={{ width: "10%" }}>Link</th>
          </tr>
          {notFollowingBack.length > 0 ? (
            notFollowersList
          ) : (
            <tr>
              <td colSpan="4">WOW! Nothing found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
