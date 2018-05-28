# wkhtmltopdf linux x64
The package automatically downloads linux 64bit wkhtmltopdf binary. Use case to be used with AWS Lambda functions 

# Installation
```shell
npm install @theo4u/wkhtmltopdf
```

# Usage
```shell
./node_modules/.bin/wkhtmltopdf
./node_modules/.bin/wkhtmltoimage
```
With [wkhtmltopdf](https://www.npmjs.com/package/wkhtmltopdf):
```js
var wkhtmltopdf = require('wkhtmltopdf');

wkhtmltopdf.command = './node_modules/.bin/wkhtmltopdf'

wkhtmltopdf('<h1>hello world</h1>', { output: 'out.pdf' })
```

# License
MIT
