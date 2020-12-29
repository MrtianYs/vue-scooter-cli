const downloadGitRepo = require('download-git-repo')

module.exports = function (url, source) {
  return new Promise((reslove, reject) => {
    downloadGitRepo('direct:' + url, source, { clone: true }, (err) => {
      if (err) {
        toast.error(err)
        reject(err)
        return
      }
      reslove()
    })
  })
}
