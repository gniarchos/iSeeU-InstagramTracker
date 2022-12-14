import React from "react"
import { ProcessContext } from "../App"
import { Icon } from "@iconify/react"

export default function Finder() {
  const { process, setProcess, showRestart, setShowRestart } =
    React.useContext(ProcessContext)

  const [following, setFollowing] = React.useState([])
  const [followers, setFollowers] = React.useState([])
  const [unfollowers, setUnfollowers] = React.useState([])
  const [showReport, setShowReport] = React.useState(false)
  const [error, setError] = React.useState("")

  function open_file_following() {
    document.getElementById("following").click()
  }

  function open_file_followers() {
    document.getElementById("followers").click()
  }

  function onChangeFileFollowing(event) {
    const fileReader = new FileReader()
    fileReader.readAsText(event.target.files[0], "UTF-8")
    fileReader.onload = (event) => {
      var obj = JSON.parse(event.target.result)

      for (var i = 0; i < obj.relationships_following.length; i++) {
        let user = obj.relationships_following[i].string_list_data[0].value
        let user_link = obj.relationships_following[i].string_list_data[0].href

        setFollowing((prevData) => [...prevData, { user, user_link }])
      }
    }

    document.getElementById("file-name-following").value =
      document.getElementById("following").files[0].name
  }

  function onChangeFileFollowers(event) {
    const fileReader = new FileReader()
    fileReader.readAsText(event.target.files[0], "UTF-8")
    fileReader.onload = (event) => {
      var obj = JSON.parse(event.target.result)

      for (var i = 0; i < obj.relationships_followers.length; i++) {
        let user = obj.relationships_followers[i].string_list_data[0].value
        let user_link = obj.relationships_followers[i].string_list_data[0].href

        setFollowers((prevData) => [...prevData, { user, user_link }])
      }
    }

    document.getElementById("file-name-followers").value =
      document.getElementById("followers").files[0].name
  }

  function comparer(otherArray) {
    return function (current) {
      return (
        otherArray.filter(function (other) {
          return (
            other.user == current.user && other.user_link == current.user_link
          )
        }).length == 0
      )
    }
  }

  function showResults() {
    if (
      document.getElementById("following").files[0]?.name ===
        "following.json" &&
      document.getElementById("followers").files[0]?.name === "followers.json"
    ) {
      setShowRestart(true)
      setError("")
      setUnfollowers(following.filter(comparer(followers)))
      setShowReport(true)
    } else {
      setError(
        "Warning: Files are not correct, please check the files and try again."
      )
    }
  }

  console.log(unfollowers)

  const unfollowersList = unfollowers.map((unfol, index) => {
    return (
      <tr>
        <td>
          <p>{index + 1}</p>
        </td>
        <td>
          <p>{unfol.user}</p>
        </td>
        <td>
          <a href={unfol.user_link} className="profile-link">
            Visit Profile
          </a>
        </td>
      </tr>
    )
  })

  // function exportReportToExcel() {
  //   let table = document.getElementsByTagName("table") // you can use document.getElementById('tableId') as well by providing id to the table tag
  //   TableToExcel.convert(table[0], {
  //     // html code may contain multiple tables so here we are refering to 1st table tag
  //     name: `export.xlsx`, // fileName you could use any name
  //     sheet: {
  //       name: "Sheet 1", // sheetName
  //     },
  //   })
  // }

  return (
    <div className={process === true ? "finder-div" : "finder-div-out"}>
      <div className="finder-container">
        {showReport === false && (
          <div className="prolog-finder">
            <h1>Files Selection</h1>
            <p className="prolog-text">
              Upload the required files and get a list of users who don't follow
              you back. If you need help to download these files click the
              button above.
            </p>
          </div>
        )}

        {showReport === false && (
          <div className="choosing-file-div">
            <div className="upload-divs">
              <div className="upload-title">
                <span className="titles">Please upload your</span>
                <span className="titles emfasis"> following.json</span>
                <span className="titles"> file below:</span>
              </div>

              <div className="file-wrapper">
                <input
                  type="file"
                  id="following"
                  className="file"
                  onChange={(e) => onChangeFileFollowing(e)}
                  accept="application/JSON"
                />

                <div>
                  <input
                    type="text"
                    name="file-name"
                    id="file-name-following"
                    className="file-name"
                    readOnly="readonly"
                    placeholder="Upload file..."
                  />

                  <button className="btn" onClick={open_file_following}>
                    Select
                  </button>
                </div>
              </div>
            </div>

            <div className="upload-divs">
              <div className="upload-title">
                <span className="titles">Please upload your</span>
                <span className="titles emfasis"> followers.json</span>
                <span className="titles"> file below:</span>
              </div>

              <div className="file-wrapper">
                <input
                  type="file"
                  id="followers"
                  className="file"
                  onChange={(e) => onChangeFileFollowers(e)}
                  accept="application/JSON"
                />

                <div>
                  <input
                    type="text"
                    name="file-name"
                    id="file-name-followers"
                    className="file-name"
                    readOnly="readonly"
                    placeholder="Upload file..."
                  />

                  <button className="btn" onClick={open_file_followers}>
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {error !== "" && showReport === false && (
          <p className="error-text">{error}</p>
        )}
        {showReport === false && (
          <button className="button-proc" onClick={showResults}>
            <span className="label">upload</span>
            <span className="icon">
              <Icon icon="dashicons:cloud-upload" width="25" height="25" />
            </span>
          </button>
        )}

        {showReport === true && (
          <div className="unfollowers-list">
            <h1>Users who don't follow you back</h1>
            <table>
              <tbody>
                <tr>
                  <th>
                    <p>#</p>
                  </th>
                  <th>
                    <p>Username</p>
                  </th>
                  <th>
                    <p>User Profile</p>
                  </th>
                </tr>
                {unfollowersList}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
