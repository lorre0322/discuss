const { LC_ID, LC_KEY, LC_MKEY ,LC_SERVER } = process.env

module.exports = {
  appId: LC_ID,
  appKey: LC_KEY,
  masterKey: LC_MKEY,
  serverURL: LC_SERVER
}
