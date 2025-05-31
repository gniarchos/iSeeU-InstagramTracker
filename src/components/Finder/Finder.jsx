import React, {
  useContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from "react"
import { ProcessContext } from "../../App"
import { Icon } from "@iconify/react"
import "./Finder.css"
import { useDropzone } from "react-dropzone"
import JSZip from "jszip"
import Results from "../Results/Results"

export default function Finder() {
  const { process, setShowRestart } = useContext(ProcessContext)

  const [following, setFollowing] = useState([])
  const [followers, setFollowers] = useState([])
  const [notFollowingBack, setNotFollowingBack] = useState([])
  const [showReport, setShowReport] = useState(false)
  const [error, setError] = useState("")
  const [fileUploaded, setFileUploaded] = useState(null)
  const [readingFile, setReadingFile] = useState(false)
  const [fileCreatedDate, setFileCreatedDate] = useState(null)

  const onDrop = useCallback(async (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const lastModifiedDate = new Date(acceptedFiles[0].lastModified)
      console.log(lastModifiedDate)
      setFileUploaded(acceptedFiles[0])
      setFileCreatedDate(lastModifiedDate)
      setReadingFile(true)
    }
  }, [])

  useEffect(() => {
    if (readingFile) {
      setError("")
      const readZip = async () => {
        try {
          const zip = new JSZip()
          const buffer = await fileUploaded.arrayBuffer()
          const zipContent = await zip.loadAsync(buffer)

          const file1 = zipContent.file(
            "connections/followers_and_following/following.json"
          )
          const file2 = zipContent.file(
            "connections/followers_and_following/followers_1.json"
          )

          if (file1) {
            const followingFile = await file1.async("text")
            var obj = JSON.parse(followingFile)

            for (var i = 0; i < obj.relationships_following.length; i++) {
              let user =
                obj.relationships_following[i].string_list_data[0].value
              let user_link =
                obj.relationships_following[i].string_list_data[0].href
              let date_followed = new Date(
                obj.relationships_following[i].string_list_data[0].timestamp *
                  1000
              )

              setFollowing((prevData) => [
                ...prevData,
                { user, user_link, date_followed },
              ])
            }
          } else {
            throw new Error(
              "The file you uploaded is not a valid Instagram zip. Please try again."
            )
          }

          if (file2) {
            const followersFile = await file2.async("text")

            var obj = JSON.parse(followersFile)

            for (var i = 0; i < obj.length; i++) {
              let user = obj[i].string_list_data[0].value
              let user_link = obj[i].string_list_data[0].href
              let date_followed = new Date(
                obj[i].string_list_data[0].timestamp * 1000
              )

              setFollowers((prevData) => [
                ...prevData,
                { user, user_link, date_followed },
              ])
            }
          } else {
            throw new Error(
              "The file you uploaded is not a valid Instagram zip. Please try again."
            )
          }

          setReadingFile(false)
        } catch (error) {
          setReadingFile(false)
          setFileUploaded(null)
          setError(error.message)
        }
      }
      readZip()
    }
  }, [fileUploaded])

  const { getRootProps, getInputProps, isFocused } = useDropzone({
    onDrop,
    accept: {
      "application/zip": [".zip"],
    },
    disabled: fileUploaded !== null,
    multiple: false,
  })

  const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    paddingTop: "100px",
    paddingBottom: "100px",
    width: "90vw",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#c2c2c2",
    borderStyle: "dashed",
    backgroundColor: "#ffffff",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
  }

  const focusedStyle = {
    borderColor: "#D13D58",
  }

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
    }),
    [isFocused]
  )

  function comparer(otherArray) {
    return function (current) {
      return (
        otherArray.filter(function (other) {
          return (
            other.user === current.user && other.user_link === current.user_link
          )
        }).length === 0
      )
    }
  }

  function showResults() {
    if (fileUploaded !== null) {
      setShowRestart(true)
      setError("")
      setNotFollowingBack(following.filter(comparer(followers)))
      setShowReport(true)
    }
  }

  return (
    <div className={process === true && "finder-wrapper"}>
      <div className="finder-container">
        {showReport === false && (
          <div className="finder-info">
            <h1 className="finder-title">File Uploader</h1>
            <p className="finder-about-text">
              Upload the <b>zip file</b> that you downloaded to obtain a list of
              users who don't follow you back.
            </p>
          </div>
        )}

        {!showReport ? (
          <>
            <div className="finder-upload-file-container">
              <div {...getRootProps({ style })}>
                <input {...getInputProps()} />
                {fileUploaded === null ? (
                  <p>Please upload the zip file here...</p>
                ) : (
                  <>
                    <p
                      style={{
                        color: "green",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <Icon icon="icon-park-solid:success" width={20} />
                      The file is uploaded successfully!
                    </p>
                    <span>
                      File Downloaded Date:{" "}
                      {`${fileCreatedDate.getDate()}/${
                        fileCreatedDate.getMonth() + 1
                      }/${fileCreatedDate.getFullYear()}`}
                    </span>
                  </>
                )}
                {fileUploaded !== null && (
                  <button
                    onClick={() => {
                      setFileUploaded(null)
                      setFollowers([])
                      setFollowing([])
                    }}
                    style={{
                      padding: "5px 10px",
                      fontSize: "0.8rem",
                      marginTop: "20px",
                    }}
                    className="app-actions-button"
                  >
                    <i></i>
                    Delete file
                    <i></i>
                  </button>
                )}

                {error !== "" && (
                  <p className="finder-error-text">
                    <Icon
                      className="finder-error-icon"
                      icon="fluent:error-circle-24-filled"
                    />

                    {error}
                  </p>
                )}
              </div>
            </div>

            <button
              disabled={fileUploaded === null}
              onClick={showResults}
              className="app-actions-button"
            >
              <i className={fileUploaded !== null ? "animation" : null}></i>
              Show Results
              <i className={fileUploaded !== null ? "animation" : null}></i>
            </button>
          </>
        ) : (
          <Results notFollowingBack={notFollowingBack} />
        )}
      </div>
    </div>
  )
}
