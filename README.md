# wkhtmltopdf
Install wkhtmltopdf and wkhtmltoimage with NPM or YARN on Linux/OSX Distro

# Installation
```shell
npm install bin-wkhtmltopdf
# OR
yarn add bin-wkhtmltopdf
```
# Usage
```shell
./node_modules/.bin/wkhtmltopdf
```
With [wkhtmltopdf](https://www.npmjs.com/package/wkhtmltopdf):
```js
var wkhtmltopdf = require('wkhtmltopdf');

wkhtmltopdf.command = './node_modules/.bin/wkhtmltopdf'

wkhtmltopdf('<h1>hello world</h1>', { output: 'out.pdf' })
```
# TODO
Install on Windows

# License
MIT
