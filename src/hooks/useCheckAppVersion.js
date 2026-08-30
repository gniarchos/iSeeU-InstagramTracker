import { useState } from "react"

export function useCheckAppVersion() {
  const [isUpdateAvailable, setIsUpdateAvailable] = useState(false)

  const checkAppVersion = async () => {
    try {
      const response = await fetch(`/version.json?t=${Date.now()}`)
      const data = await response.json()

      if (data.version !== __APP_VERSION__) {
        console.log("New version available:", data.version)
        setIsUpdateAvailable(true)
      } else {
        setIsUpdateAvailable(false)
      }
    } catch (e) {
      console.error("Failed to check version")
    }
  }

  return { isUpdateAvailable, checkAppVersion }
}
