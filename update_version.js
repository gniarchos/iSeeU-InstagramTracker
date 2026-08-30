const fs = require("fs")
const path = require("path")
const packageJson = require("./package.json")

const versionData = { version: packageJson.version }

const versionFilePath = path.join(__dirname, "public", "version.json")

fs.writeFileSync(versionFilePath, JSON.stringify(versionData, null, 2))
console.log(`✅ Version ${packageJson.version} written to public/version.json`)
