const fs = require('fs')
const path = require('path')

let content = fs.readFileSync(
  path.resolve(__dirname, 'src/node/index.ts'),
  'utf8',
)

content = content.match(/\/\* browser:start \*\/.*\/\* browser:end \*\//gs)

fs.writeFileSync(path.resolve(__dirname, 'src/index.ts'), `${content}\n`)
