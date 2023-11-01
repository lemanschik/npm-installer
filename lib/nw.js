// Sync execute async .mjs methods
exports.findpath = () => {
  // grabs the value from the console.log output
  return require('node:child_process').execSync('node -p '+__dirname+'/findpath.mjs').slice(0,-1);
}
