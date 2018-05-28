var wget = require('wget-improved')
var exec = require('child_process').exec
var src, output, cmd, suffix

var url = 'https://github.com/wkhtmltopdf/wkhtmltopdf/releases/download/'
var version = '0.12.4'

// linux
output = 'wkhtmltopdf.tar.xz'
// 64bit
suffix = '_linux-generic-amd64.tar.xz'
cmd = 'tar -xvf wkhtmltopdf.tar.xz'

src = url + version + '/wkhtmltox-' + version + suffix

console.log('installing linux binary 64bit of wkhtmltopdf');

var download = wget.download(src, output, {})
download.on('error', function (err) {
  console.log(err)
})
download.on('end', function (output) {
  exec(cmd, function (error, stdout, stderr) {
    if (error) {
      console.error(`exec error: ${error}`)
      return
    }
    console.log('wkhtmltopdf Successfully installed')
  })
})
