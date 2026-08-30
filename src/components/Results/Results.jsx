import React from "react"
import "./Results.css"
import { Icon } from "@iconify/react/dist/iconify.js"
import { Alert, Chip } from "@mui/material"

export default function Results({ notFollowingBack }) {
  console.log(notFollowingBack)
  const newUnfollowersCount =
    notFollowingBack?.filter((user) => user.is_new).length || 0

  const notFollowersList = notFollowingBack
    .sort((a, b) => b.date_followed - a.date_followed)
    .map((user, index) => {
      const options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      }
      const formattedDate = new Intl.DateTimeFormat("el-GR", options).format(
        user.date_followed,
      )

      return (
        <tr>
          <td>{index + 1}</td>
          <td>
            {user.user}{" "}
            {user.is_new && (
              <Chip
                size="small"
                label="NEW"
                sx={{
                  backgroundColor: "#f1f1f1bc",
                  color: "#911515",
                  borderRadius: "5px",
                  height: "1.2rem",
                  "& .MuiChip-label": {
                    fontWeight: 600,
                    fontSize: "0.6rem",
                    px: 1, // προαιρετικό padding αν θες να το ρυθμίσεις
                  },
                }}
              />
            )}
          </td>
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
        <span className="results-about-text">
          The moment of truth. See who’s ghosting your follow 👻
        </span>
        <Alert severity="info">
          Note that <b>deactivated accounts</b> may appear in this list.
        </Alert>
        {notFollowingBack.length > 0 &&
          (newUnfollowersCount > 0 ? (
            <Alert icon={false} severity="error">
              <span>
                <b>{newUnfollowersCount}</b> new accounts found
              </span>
            </Alert>
          ) : (
            <Alert icon={false} severity="success">
              <span>🎉 No new accounts found! 🎉</span>
            </Alert>
          ))}
      </div>
      <table>
        <tbody>
          <tr>
            <th style={{ width: "5%" }}>#</th>
            <th>Username</th>
            <th style={{ width: "20%" }}>Followers Since</th>
            <th style={{ width: "10%" }}>Profile</th>
          </tr>
          {notFollowingBack.length > 0 ? (
            notFollowersList
          ) : (
            <tr>
              <td colSpan="4">WOW! Nothing was found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
